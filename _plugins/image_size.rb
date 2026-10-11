# Liquid filters that read an image's pixel size from its file header at build time, so templates can emit
# width/height attributes (no layout shift while images load) and srcset lists of the size variants that exist.
#
#   {{ '/assets/img/publication_preview/dart.webp' | image_size }}           => [720, 405] (nil if unreadable)
#   {{ '/assets/img/publication_preview/dart.webp' | image_srcset: '240,360' }}
#     => "/assets/img/publication_preview/dart-240.webp 240w, ... /dart.webp 720w" (only variants that exist)
module Jekyll
  module ImageSizeFilter
    @@cache = {}

    def image_size(path)
      return nil if path.nil? || path.to_s.include?("://")
      file = local_path(path)
      return nil unless file && File.file?(file)
      @@cache[[file, File.mtime(file)]] ||= read_size(file)
    end

    def image_srcset(path, widths)
      size = image_size(path)
      return "" unless size
      base = path.to_s.sub(/\.(webp|png|jpe?g)\z/i, "")
      ext = File.extname(path.to_s)
      prefix = @context.registers[:site].baseurl.to_s
      prefix = "" if path.to_s.start_with?(prefix)
      entries = widths.to_s.split(",").map(&:strip).map(&:to_i).select { |w| w > 0 && w < size[0] }.filter_map do |w|
        variant = "#{base}-#{w}#{ext}"
        "#{prefix}#{variant} #{w}w" if image_size(variant)
      end
      (entries + ["#{prefix}#{path} #{size[0]}w"]).join(", ")
    end

    private

    def local_path(path)
      site = @context.registers[:site]
      rel = path.to_s.sub(/\A#{Regexp.escape(site.baseurl.to_s)}/, "").sub(%r{\A/}, "")
      File.join(site.source, rel)
    end

    def read_size(file)
      File.open(file, "rb") do |f|
        head = f.read(64) || ""
        if head.start_with?("\x89PNG".b)
          head[16, 8].unpack("NN")
        elsif head.start_with?("GIF8")
          head[6, 4].unpack("vv")
        elsif head[0, 4] == "RIFF" && head[8, 4] == "WEBP"
          webp_size(head)
        elsif head.start_with?("\xFF\xD8".b)
          f.rewind
          jpeg_size(f)
        elsif head.include?("<svg") || head.include?("<?xml")
          f.rewind
          svg_size(f.read(4096))
        end
      end
    rescue StandardError
      nil
    end

    def webp_size(head)
      case head[12, 4]
      when "VP8 "
        w, h = head[26, 4].unpack("vv")
        [w & 0x3fff, h & 0x3fff]
      when "VP8L"
        b = head[21, 4].unpack("C4")
        [1 + (b[0] | ((b[1] & 0x3f) << 8)), 1 + ((b[1] >> 6) | (b[2] << 2) | ((b[3] & 0x0f) << 10))]
      when "VP8X"
        w = head[24, 3].unpack("C3")
        h = head[27, 3].unpack("C3")
        [1 + (w[0] | (w[1] << 8) | (w[2] << 16)), 1 + (h[0] | (h[1] << 8) | (h[2] << 16))]
      end
    end

    def jpeg_size(f)
      f.read(2)
      loop do
        marker = f.read(2) or return nil
        return nil unless marker.getbyte(0) == 0xff
        code = marker.getbyte(1)
        length = f.read(2).unpack1("n")
        if (0xc0..0xcf).cover?(code) && ![0xc4, 0xc8, 0xcc].include?(code)
          h, w = f.read(5).unpack("xnn")
          return [w, h]
        end
        f.seek(length - 2, IO::SEEK_CUR)
      end
    end

    def svg_size(text)
      tag = text[/<svg\b[^>]*>/m] or return nil
      w = tag[/\swidth="([\d.]+)(px)?"/, 1]
      h = tag[/\sheight="([\d.]+)(px)?"/, 1]
      w && h ? [w.to_f.round, h.to_f.round] : nil
    end
  end
end

Liquid::Template.register_filter(Jekyll::ImageSizeFilter)

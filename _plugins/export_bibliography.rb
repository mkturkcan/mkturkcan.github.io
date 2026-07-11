require "fileutils"

Jekyll::Hooks.register :site, :post_write do |site|
  bibliography = site.config.dig("scholar", "bibliography") || "papers.bib"
  source = File.join(site.source, "_bibliography", bibliography)
  destination = File.join(site.dest, "assets", "bibliography", bibliography)
  next unless File.file?(source)

  FileUtils.mkdir_p(File.dirname(destination))
  FileUtils.cp(source, destination)
end

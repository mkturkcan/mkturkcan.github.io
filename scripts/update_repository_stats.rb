require "json"
require "net/http"
require "time"
require "uri"
require "yaml"

ROOT = File.expand_path("..", __dir__)
REPOSITORIES_PATH = File.join(ROOT, "_data", "repositories.yml")
OUTPUT_PATH = File.join(ROOT, "_data", "repository_stats.yml")

def fetch_json(url, token: nil)
  uri = URI(url)
  request = Net::HTTP::Get.new(uri)
  request["Accept"] = "application/json"
  request["User-Agent"] = "mkturkcan.github.io repository metadata builder"
  request["Authorization"] = "Bearer #{token}" if token && !token.empty?

  response = Net::HTTP.start(uri.host, uri.port, use_ssl: true, open_timeout: 10, read_timeout: 20) do |http|
    http.request(request)
  end
  raise "#{response.code} #{response.message}" unless response.is_a?(Net::HTTPSuccess)

  JSON.parse(response.body)
end

def github_stats(url, token)
  path = URI(url).path.split("/").reject(&:empty?).first(2)
  return nil unless path.length == 2

  data = fetch_json("https://api.github.com/repos/#{path.join('/')}", token: token)
  license = data.dig("license", "spdx_id")
  license = nil if license == "NOASSERTION"
  {
    "stars" => data["stargazers_count"],
    "forks" => data["forks_count"],
    "language" => data["language"],
    "license" => license,
    "updated_at" => data["pushed_at"]
  }.compact
end

def huggingface_stats(url)
  parts = URI(url).path.split("/").reject(&:empty?)
  resource_type = parts.first == "datasets" ? "datasets" : "models"
  identifier = resource_type == "datasets" ? parts.drop(1).first(2) : parts.first(2)
  return nil unless identifier.length == 2

  data = fetch_json("https://huggingface.co/api/#{resource_type}/#{identifier.join('/')}")
  {
    "type" => resource_type == "datasets" ? "dataset" : "model",
    "downloads" => data["downloads"],
    "likes" => data["likes"],
    "updated_at" => data["lastModified"]
  }.compact
end

repositories = YAML.safe_load_file(REPOSITORIES_PATH, aliases: true).fetch("repositories")
existing = File.file?(OUTPUT_PATH) ? YAML.safe_load_file(OUTPUT_PATH, aliases: true) : {}
existing_repositories = existing.fetch("repositories", {})
token = ENV["GITHUB_TOKEN"]
updated = false

stats = repositories.to_h do |repository|
  previous = existing_repositories.fetch(repository["name"], {})
  entry = previous.dup

  if repository["github"]
    begin
      entry["github"] = github_stats(repository["github"], token)
      updated = true
    rescue StandardError => error
      warn "GitHub metadata unavailable for #{repository['name']}: #{error.message}"
    end
  end

  if repository["huggingface"]
    begin
      entry["huggingface"] = huggingface_stats(repository["huggingface"])
      updated = true
    rescue StandardError => error
      warn "Hugging Face metadata unavailable for #{repository['name']}: #{error.message}"
    end
  end

  [repository["name"], entry]
end

payload = {
  "generated_at" => updated ? Time.now.utc.iso8601 : existing["generated_at"],
  "repositories" => stats
}
File.write(OUTPUT_PATH, YAML.dump(payload))

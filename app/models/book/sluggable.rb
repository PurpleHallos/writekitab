module Book::Sluggable
  extend ActiveSupport::Concern

  included do
    before_save :generate_slug, if: -> { slug.blank? }
  end

  def generate_slug
    parameterized_title = title.to_s.downcase.strip
                               .gsub(/[^\p{L}\p{N}]+/u, "-")
                               .gsub(/\A-+|-+\z/, "")
    self.slug = parameterized_title.presence || "book-#{SecureRandom.hex(4)}"
  end
end

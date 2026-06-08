class Leaf < ApplicationRecord
  include Editable, Positionable, Searchable

  belongs_to :book, touch: true
  delegated_type :leafable, types: Leafable::TYPES, dependent: :destroy
  positioned_within :book, association: :leaves, filter: :active

  delegate :searchable_content, to: :leafable

  enum :status, %w[ active trashed ].index_by(&:itself), default: :active

  scope :with_leafables, -> { includes(:leafable) }

  def slug
    parameterized_title = title.to_s.downcase.strip
                               .gsub(/[^\p{L}\p{N}]+/u, "-")
                               .gsub(/\A-+|-+\z/, "")
    parameterized_title.presence || "-"
  end
end

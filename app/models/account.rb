class Account < ApplicationRecord
  include Joinable

  LIBRARY_DIRECTIONS = %w[ ltr rtl auto ].freeze
  UI_LANGUAGES = %w[ en ar ].freeze

  validates :library_direction, inclusion: { in: LIBRARY_DIRECTIONS }
  validates :ui_language, inclusion: { in: UI_LANGUAGES }
end

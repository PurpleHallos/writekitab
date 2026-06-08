class ApplicationController < ActionController::Base
  include Authentication, Authorization, VersionHeaders

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  RTL_SCRIPTS = /\p{Arabic}|\p{Hebrew}|\p{Syriac}|\p{Thaana}/

  around_action :switch_locale

  private
    def switch_locale(&action)
      locale = book_locale || params[:locale] || Current.account&.ui_language&.to_sym || I18n.default_locale
      I18n.with_locale(locale, &action)
    end

    def book_locale
      book = find_book_from_params
      return unless book&.title.present?

      book.title.match?(RTL_SCRIPTS) ? :ar : :en
    end

    def find_book_from_params
      id = params[:book_id] || (controller_name == "books" && params[:id])
      Book.find_by(id: id) if id
    end
end

module ApplicationHelper
  def hide_from_user_style_tag
    tag.style(<<~CSS.html_safe)
      [data-hide-from-user-id="#{Current.user.id}"] {
        display: none!important;
      }
    CSS
  end

  def custom_styles_tag
    if custom_styles = Current.account&.custom_styles
      tag.style(custom_styles.to_s.html_safe, data: { turbo_track: "reload" })
    end
  end

  RTL_SCRIPTS = /\p{Arabic}|\p{Hebrew}|\p{Syriac}|\p{Thaana}/

  def locale_direction
    if @book&.title.present?
      # Book pages: direction is driven entirely by the book's title language
      @book.title.match?(RTL_SCRIPTS) ? "rtl" : "ltr"
    else
      # Home/library pages: use locale or account setting
      return "rtl" if %i[ar he fa].include?(I18n.locale)
      Current.account&.library_direction.presence || "ltr"
    end
  end

  def page_locale
    if @book&.title.present?
      # Book pages: if the title uses RTL script, use 'ar'; otherwise use default locale or 'en'
      @book.title.match?(RTL_SCRIPTS) ? :ar : :en
    else
      I18n.locale
    end
  end
end

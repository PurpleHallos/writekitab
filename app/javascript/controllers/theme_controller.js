import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sunIcon", "moonIcon"]

  initialize() {
    // Read stored theme preference or fall back to system preferences
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    this.theme = stored || (prefersDark ? "dark" : "light")
    this.applyTheme(false)
  }

  connect() {
    this.updateIcons()
  }

  toggle(event) {
    if (event) event.preventDefault()

    // Flip theme
    this.theme = this.theme === "light" ? "dark" : "light"
    localStorage.setItem("theme", this.theme)

    // Apply with transition animation
    this.applyTheme(true)
    this.updateIcons()
  }

  applyTheme(animate) {
    if (animate) {
      document.documentElement.classList.add("theme-transition")
      // Remove class after transition completes
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition")
      }, 500)
    }

    document.documentElement.setAttribute("data-theme", this.theme)
  }

  updateIcons() {
    if (this.hasSunIconTarget && this.hasMoonIconTarget) {
      if (this.theme === "light") {
        this.sunIconTarget.style.display = "none"
        this.moonIconTarget.style.display = "inline-block"
      } else {
        this.sunIconTarget.style.display = "inline-block"
        this.moonIconTarget.style.display = "none"
      }
    }
  }
}

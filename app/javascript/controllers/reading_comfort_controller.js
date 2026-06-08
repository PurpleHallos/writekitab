import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menu", "fontSizeLabel" ]

  initialize() {
    this.fontSize = parseInt(localStorage.getItem("comfort-font-size") || "3")
    this.blueFilter = localStorage.getItem("comfort-blue-filter") === "true"
    this.fontSerif = localStorage.getItem("comfort-font-serif") === "true"

    this.applyAll()
  }

  connect() {
    this.updateUI()
  }

  toggleMenu(event) {
    if (event) event.preventDefault()
    this.menuTarget.classList.toggle("comfort-menu--open")
  }

  closeMenu(event) {
    if (this.menuTarget.classList.contains("comfort-menu--open") && !this.element.contains(event.target)) {
      this.menuTarget.classList.remove("comfort-menu--open")
    }
  }

  increaseFont(event) {
    if (event) event.preventDefault()
    if (this.fontSize < 5) {
      this.fontSize++
      localStorage.setItem("comfort-font-size", this.fontSize.toString())
      this.applyFontSize()
      this.updateUI()
    }
  }

  decreaseFont(event) {
    if (event) event.preventDefault()
    if (this.fontSize > 1) {
      this.fontSize--
      localStorage.setItem("comfort-font-size", this.fontSize.toString())
      this.applyFontSize()
      this.updateUI()
    }
  }

  toggleBlueFilter(event) {
    if (event) event.preventDefault()
    this.blueFilter = !this.blueFilter
    localStorage.setItem("comfort-blue-filter", this.blueFilter.toString())
    this.applyBlueFilter()
    this.updateUI()
  }

  toggleFontSerif(event) {
    if (event) event.preventDefault()
    this.fontSerif = !this.fontSerif
    localStorage.setItem("comfort-font-serif", this.fontSerif.toString())
    this.applyFontSerif()
    this.updateUI()
  }

  applyAll() {
    this.applyFontSize()
    this.applyBlueFilter()
    this.applyFontSerif()
  }

  applyFontSize() {
    document.documentElement.setAttribute("data-comfort-size", this.fontSize.toString())
  }

  applyBlueFilter() {
    document.documentElement.setAttribute("data-comfort-blue-filter", this.blueFilter.toString())
  }

  applyFontSerif() {
    document.documentElement.setAttribute("data-comfort-font-serif", this.fontSerif.toString())
  }

  updateUI() {
    if (this.hasFontSizeLabelTarget) {
      this.fontSizeLabelTarget.textContent = `${this.fontSize}x`
    }
    
    // Toggle active state on buttons inside comfort menu
    const blueBtn = this.element.querySelector("[data-action='reading-comfort#toggleBlueFilter']")
    if (blueBtn) {
      blueBtn.classList.toggle("btn--comfort-active", this.blueFilter)
    }

    const serifBtn = this.element.querySelector("[data-action='reading-comfort#toggleFontSerif']")
    if (serifBtn) {
      serifBtn.classList.toggle("btn--comfort-active", this.fontSerif)
    }
  }
}

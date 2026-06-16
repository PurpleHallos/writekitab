import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "tab", "pane" ]

  connect() {
    this.restoreTab()
  }

  switch(event) {
    const tabName = event.currentTarget.dataset.tabName
    this.activate(tabName)
  }

  activate(tabName) {
    localStorage.setItem("activeSettingsTab", tabName)

    this.tabTargets.forEach(tab => {
      const isActive = tab.dataset.tabName === tabName
      tab.classList.toggle("active", isActive)
      tab.setAttribute("aria-selected", isActive ? "true" : "false")
    })

    this.paneTargets.forEach(pane => {
      const isActive = pane.dataset.paneName === tabName
      pane.classList.toggle("hidden", !isActive)
    })
  }

  restoreTab() {
    const params = new URLSearchParams(window.location.search)
    const urlTab = params.get("tab")
    const defaultTab = this.tabTargets[0]?.dataset.tabName || "general"
    const savedTab = urlTab || localStorage.getItem("activeSettingsTab") || defaultTab
    
    const tabExists = this.tabTargets.some(tab => tab.dataset.tabName === savedTab)
    this.activate(tabExists ? savedTab : defaultTab)
  }
}

import Cookies from "js-cookie"
import { observable, action, autorun } from "mobx"

type Theme = "dark" | "light"

const getInitialTheme = () => (Cookies.get("theme") as Theme) || "light"

class ThemeStore {
  @observable accessor theme: Theme = getInitialTheme()

  constructor() {
    autorun(() => {
      document.documentElement.classList.toggle("dark", this.theme === "dark")
      Cookies.set("theme", this.theme, { expires: 365 })
    })
  }

  @action dark = () => (this.theme = "dark")
  @action light = () => (this.theme = "light")
  @action toggle = () => (this.theme = this.theme === "dark" ? "light" : "dark")
}

export const themeStore = new ThemeStore()

import { action, observable } from "mobx"

class SideBarStore {
  @observable accessor opened = true

  @action open = () => (this.opened = true)
  @action close = () => (this.opened = false)
  @action toggle = () => (this.opened = !this.opened)
}

export const sidebarStore = new SideBarStore()
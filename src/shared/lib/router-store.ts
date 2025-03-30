// import { router } from "@/app/router/router"
import { AnyRouter, AllParams } from "@tanstack/router-core"
import { createAtom } from "mobx"

export class RouterStore<R extends AnyRouter = AnyRouter> {
  private atom = createAtom('mobxRouter', this.startObserve.bind(this), this.stopObserve.bind(this))

  navigate

  constructor(private _router: R) {
    this.navigate = this._router.navigate
  }

  private get router() {
    this.atom.reportObserved()
    return this._router
  }

  get state() {
    return this.router.state
  }

  get params(): AllParams<R['routeTree']> {
    const { matches } = this.router.state
    const routeMatch = matches.at(-1)
    return (routeMatch?.params || {}) as AllParams<R['routeTree']>
  }

  get search() {
    const { matches } = this.router.state
    const routeMatch = matches[matches.length - 1]
    return routeMatch ? routeMatch.search : {}
  }


  private unsubscribe = () => { }
  private startObserve() {
    const unsubscribeRouter = this.router.subscribe('onResolved', () => {
      this.atom.reportChanged()
    })

    this.unsubscribe = unsubscribeRouter
  }

  private stopObserve() {
    this.unsubscribe()
  }
}

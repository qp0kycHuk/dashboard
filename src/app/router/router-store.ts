import { AnyRouter, AllParams } from "@tanstack/router-core"
import { createAtom } from "mobx"

export class RouterStore<R extends AnyRouter = AnyRouter> {
  private atom = createAtom('mobxRouter', this.startObserve.bind(this), this.stopObserve.bind(this))

  readonly navigate: R['navigate']

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
    return (matches.at(-1)?.params ?? {}) as AllParams<R['routeTree']>
  }

  get search() {
    const { matches } = this.router.state
    return matches.at(-1)?.search ?? {}
  }


  private unsubscribe = () => { }
  private startObserve() {
    const unsubscribeRouter = this._router.subscribe('onResolved', () => {
      this.atom.reportChanged()
    })

    this.unsubscribe = unsubscribeRouter
  }

  private stopObserve() {
    this.unsubscribe()
  }
}

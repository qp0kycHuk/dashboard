import { router } from "@/app/router/router"
import { AnyRouter } from "@tanstack/react-router"
import { computed, createAtom } from "mobx"

export class RouterStore<R extends AnyRouter = AnyRouter> {
  private atom = createAtom('mobxRouter', this.startObserve.bind(this), this.stopObserve.bind(this))

  constructor(private _router: R) { }

  private get router() {
    this.atom.reportObserved()
    return this._router
  }

  get params() {
    const { matches } = this.router.
    const routeMatch = matches[matches.length - 1]
    return routeMatch ? routeMatch.params : {}
  }

  get state() {
    return this.router.state
  }

  get searchParams(){
    const { matches } = this.router.state
    const routeMatch = matches[matches.length - 1]
    return routeMatch ? routeMatch.search : {}
  }

  private unsubscribe = () => { }
  private startObserve() {
    console.log('startObserve')

    const unsubscribeRouter = router.subscribe('onResolved', (e) => {
      console.log(router.matchRoute(router.state.location))
      console.log(router.state)

    })

    this.unsubscribe = unsubscribeRouter
  }
  private stopObserve() {
    console.log('stopObserve')

    this.unsubscribe()
  }
}
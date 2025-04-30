import { DefaultError, QueryClient, QueryKey, QueryObserver, QueryObserverOptions } from "@tanstack/query-core"
import { createAtom, reaction } from "mobx"

export class QueryStore<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> {
  private atom = createAtom('mobxQuery', this.startObserve.bind(this), this.stopObserve.bind(this))
  private queryObserver

  constructor(
    private client: QueryClient,
    private getOptions: () => QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>,
  ) {
    this.queryObserver = new QueryObserver(this.client, this.defaultedOptions)
  }

  get query() {
    this.atom.reportObserved()
    const result = this.queryObserver.getOptimisticResult(this.defaultedOptions)

    return result
  }

  private unsubscribe = () => { }
  private startObserve() {
    const unsubscribeReaction = reaction(
      () => this.defaultedOptions,
      () => {
        this.queryObserver.setOptions(this.defaultedOptions)
      }
    )
    const unsubscribeObserver = this.queryObserver.subscribe(() => this.atom.reportChanged())

    this.unsubscribe = () => {
      unsubscribeReaction()
      unsubscribeObserver()
    }
  }

  private stopObserve() {
    this.unsubscribe()
  }

  @computed
  get defaultedOptions() {
    return this.client.defaultQueryOptions(this.getOptions())
  }
}
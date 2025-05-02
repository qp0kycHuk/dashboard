import { DefaultError, QueryKey, QueryObserver, QueryObserverOptions } from "@tanstack/query-core"
import { computed, createAtom, reaction } from "mobx"
import { queryClient } from "./query-client"

export class QueryStore<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> {
  private atom = createAtom('mobxQuery', this.startObserve.bind(this), this.stopObserve.bind(this))
  private queryObserver
  private client = queryClient

  constructor(
    private getOptions: () => QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>,
  ) {
    this.queryObserver = new QueryObserver(this.client, this.defaultedOptions)
  }

  get query() {
    this.atom.reportObserved()
    const result = this.queryObserver.getOptimisticResult(this.defaultedOptions)

    return result
  }

  get data() {
    return this.query.data
  }

  get error() {
    return this.query.error
  }

  get isError() {
    return this.query.isError
  }

  get isLoading() {
    return this.query.isLoading
  }

  get isSuccess() {
    return this.query.isSuccess
  }

  get isFetching() {
    return this.query.isFetching
  }

  get isPending() {
    return this.query.isPending
  }

  get status() {
    return this.query.status
  }

  get isPlaceholderData() {
    return this.query.isPlaceholderData
  }

  get isRefetchError() {
    return this.query.isRefetchError
  }

  get isRefetching() {
    return this.query.isRefetching
  }

  get isStale() {
    return this.query.isStale
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
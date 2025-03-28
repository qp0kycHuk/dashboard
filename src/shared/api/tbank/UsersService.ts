import { root } from "./base"

const SERVICE_ENDPOINT = 'tinkoff.public.invest.api.contract.v1.UsersService/'

export const UsersService = {
  async GetAccounts() {
    return (await root.post<GetAccountsResponse>(SERVICE_ENDPOINT + 'GetAccounts', {
      "status": "ACCOUNT_STATUS_UNSPECIFIED"
    })).data
  }
}


type Account = {
  id: string,
  type: string,
  name: string,
  status: string,
  openedDate: string,
  closedDate: string,
  accessLevel: string,
}

type GetAccountsResponse = {
  accounts: Account[]
}
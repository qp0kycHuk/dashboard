import { root } from "./base"

const SERVICE_ENDPOINT = 'tinkoff.public.invest.api.contract.v1.OperationsService/'

export const OperationsService = {
  async GetPortfolio({ accountId }: { accountId: string }) {
    return (await root.post<GetPortfolioResponse>(SERVICE_ENDPOINT + 'GetPortfolio', {
      "accountId": accountId,
      "currency": "RUB"
    })).data
  }
}

export interface GetPortfolioResponse {
  totalAmountBonds:      MoneyValue;
  totalAmountFutures:    MoneyValue;
  totalAmountSp:         MoneyValue;
  positions:             Position[];
  totalAmountEtf:        MoneyValue;
  accountId:             string;
  totalAmountCurrencies: MoneyValue;
  dailyYield:            MoneyValue;
  expectedYield:         Quotation;
  totalAmountShares:     MoneyValue;
  totalAmountPortfolio:  MoneyValue;
  virtualPositions:      VirtualPosition[];
  dailyYieldRelative:    Quotation;
  totalAmountOptions:    MoneyValue;
}

export interface MoneyValue {
  nano:     number;
  currency: string;
  units:    string;
}

export interface Quotation {
  nano:  number;
  units: string;
}

export interface Position {
  varMargin:                MoneyValue;
  instrumentType:           string;
  quantity:                 Quotation;
  averagePositionPricePt:   Quotation;
  expectedYieldFifo:        Quotation;
  averagePositionPriceFifo: MoneyValue;
  currentPrice:             MoneyValue;
  positionUid:              string;
  figi:                     string;
  quantityLots:             Quotation;
  blockedLots:              Quotation;
  averagePositionPrice:     MoneyValue;
  blocked:                  boolean;
  instrumentUid:            string;
  dailyYield:               MoneyValue;
  currentNkd:               MoneyValue;
  expectedYield:            Quotation;
}

export interface VirtualPosition {
  averagePositionPrice:     MoneyValue;
  instrumentType:           string;
  quantity:                 Quotation;
  expectedYieldFifo:        Quotation;
  averagePositionPriceFifo: MoneyValue;
  instrumentUid:            string;
  dailyYield:               MoneyValue;
  positionUid:              string;
  currentPrice:             MoneyValue;
  figi:                     string;
  expectedYield:            Quotation;
  expireDate:               Date;
}

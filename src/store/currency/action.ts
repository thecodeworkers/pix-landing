import { CURRENCY_PRICE } from './action-types';

export const savePrice = (prices: any) => {
  return {
    type: CURRENCY_PRICE,
    payload: prices
  }
}
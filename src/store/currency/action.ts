import { CURRENCY_PRICE } from './action-types';

export const savePrice = (price: any) => {
  return {
    type: CURRENCY_PRICE,
    payload: price
  }
}
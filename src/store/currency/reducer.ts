import { CURRENCY_PRICE_ASYNC } from './action-types';

const initialState: any = {
  bitcoin: null,
  ethereum: null,
  litecoin: null,
  dash: null
}

const getCurrenciesPrice =(state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENCY_PRICE_ASYNC:
    return { ...state, ...payload.currencies }

    default:
    return state;
  }
}

export default getCurrenciesPrice;
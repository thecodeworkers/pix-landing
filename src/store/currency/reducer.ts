import { CURRENCY_PRICE } from './action-types';

const initialState: any = {
  btc: null,
  eth: null,
  ltc: null,
  dash: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENCY_PRICE:
    return { btc: payload }

    default:
    return state;
  }
}
import { CARD_FLIP } from "./action-types";

const initialState = {
  btcFlip: false,
  ethFlip: false,
  dashFlip: false,
  usdtFlip: false,
  btcIcon: '#f7931a',
  ethIcon: '#444457',
  dashIcon: '#008de4',
  usdtIcon: '#57d6af'
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CARD_FLIP:
    return { ...state, ...payload }

    default:
    return state;
  }
}

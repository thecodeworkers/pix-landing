import { SAVE_REFERENCE } from "./action-types";

const initialState = {
  loginRef: null,
  productRef: null,
  aboutRef: null,
  benefitsRef: null,
  storeRef: null,
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SAVE_REFERENCE:
    return { ...state, ...payload }

    default:
    return state;
  }
}

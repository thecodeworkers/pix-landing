import { SAVE_REFERENCE } from "./action-types";

const initialState = {
  aboutRef: null,
  productRef: null
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SAVE_REFERENCE:
    return { ...payload }

    default:
    return state;
  }
}

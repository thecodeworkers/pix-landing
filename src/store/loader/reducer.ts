import { SET_LOADER } from "./action-types";

const initialState = {
  loader: null
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_LOADER:
    return { ...state, ...payload }

    default:
    return state;
  }
}

import { SAVE_STEP } from "./action-types";

const initialState = {
  stepOne: null,
  stepTwo: null,
  stepThree: null,
  completeSecondAnimation: false
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SAVE_STEP:
    return { ...state, ...payload }

    default:
    return state;
  }
}

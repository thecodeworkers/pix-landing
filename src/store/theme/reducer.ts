import { TOGGLE_DARK_THEME } from "./action-types"

const initialState: any = {
  darkTheme: false
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case TOGGLE_DARK_THEME:
    return { darkTheme: payload };

    default:
    return state;
  }
}

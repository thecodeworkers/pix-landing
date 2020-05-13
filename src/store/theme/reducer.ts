import { TOGGLE_DARK_THEME } from "./action-types"

const initialState: any = {
  toggleDarkTheme: false
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case TOGGLE_DARK_THEME:
    return { toggleDarkTheme: payload };

    default:
    return state;
  }
}

import { TOGGLE_DARK_THEME } from './action-types';

export const toggleDarkTheme = payload => {
  return {
    type: TOGGLE_DARK_THEME,
    payload
  }
}

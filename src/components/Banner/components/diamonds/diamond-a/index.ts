import { diamondLight } from  './light';
import { diamondDark } from './dark';

export default (theme: boolean) => {
  const correctTheme = theme ? 'dark' : 'light';

  const box = {
    light: {
      linearGradient: diamondLight
    },
    dark: {
      linearGradient: diamondDark
    }
  }

  return box[correctTheme];
}

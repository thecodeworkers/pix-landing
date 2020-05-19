import { boxLight, polygonLight } from  './light';
import { boxDark, polygonDark } from './dark';

export default (theme: boolean) => {
  const correctTheme = theme ? 'dark' : 'light';

  const box = {
    light: {
      linearGradient: boxLight,
      polygon: polygonLight
    },
    dark: {
      linearGradient: boxDark,
      polygon: polygonDark
    }
  }

  return box[correctTheme];
}

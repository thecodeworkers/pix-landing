import { combineReducers } from "redux";
import theme from './theme/reducer';
import newsletter from './newsletter/reducer';
import scroll from './scroll/reducer';
import getCurrenciesPrice from './currency/reducer';
import onboarding from './onboarding/reducer';
import loaderResult from './loader/reducer';
import flipState from './card-flip/reducer';

const reducers = combineReducers({
  theme,
  newsletter,
  scroll,
  currency: getCurrenciesPrice,
  onboarding,
  loaderResult,
  flipState
});

export default reducers;

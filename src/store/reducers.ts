import { combineReducers } from "redux";
import theme from './theme/reducer';
import postNewsletter from './newsletter/reducer';
import scroll from './scroll/reducer';
import getCurrenciesPrice from './currency/reducer';

const reducers = combineReducers({
  theme,
  newsletter: postNewsletter,
  scroll,
  currency: getCurrenciesPrice
});

export default reducers;
import { combineReducers } from "redux";
import theme from './theme/reducer';
import postNewsletter from './newsletter/reducer';
import scroll from './scroll/reducer';
import currency from './currency/reducer';

const reducers = combineReducers({
  theme,
  newsletter: postNewsletter,
  scroll,
  currency

});

export default reducers;
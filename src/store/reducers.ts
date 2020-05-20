import { combineReducers } from "redux";
import theme from './theme/reducer';
import postNewsletter from './newsletter/reducer';
import scroll from './scroll/reducer';

const reducers = combineReducers({
  theme,
  newsletter: postNewsletter,
  scroll
});

export default reducers;
import { combineReducers } from "redux";
import theme from './theme/reducer';
import newsletter from './newsletter/reducer';
import scroll from './scroll/reducer';

const reducers = combineReducers({
  theme,
  newsletter,
  scroll
});

export default reducers;

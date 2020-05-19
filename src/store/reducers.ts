import { combineReducers } from "redux";
import theme from './theme/reducer';
import postNewsletter from './newsletter/reducer';

const reducers = combineReducers({
  theme,
  newsletter: postNewsletter
});

export default reducers;
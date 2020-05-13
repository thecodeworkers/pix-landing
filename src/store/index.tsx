import React from 'react';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = () => createStore(rootReducer);

export default ({ element }) => (
  <Provider store={store()}>{element}</Provider>
);

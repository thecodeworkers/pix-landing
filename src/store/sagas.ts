import { all, fork } from "redux-saga/effects";
import { watchPostNewsletter } from './newsletter/saga';
import { watchGetCurrency } from './currency/saga';

export default function* rootSaga() {
  yield all([
    fork(watchPostNewsletter),
    fork(watchGetCurrency)
  ]);
}
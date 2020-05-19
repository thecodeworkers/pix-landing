import { all, fork } from "redux-saga/effects";
import { watchPostNewsletter } from './newsletter/saga';

export default function* rootSaga() {
  yield all([
    fork(watchPostNewsletter),
  ]);
}
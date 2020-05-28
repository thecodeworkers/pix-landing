import { call, put, takeLatest, select, delay, take } from 'redux-saga/effects';
import { CURRENCY_PRICE, CURRENCY_PRICE_ASYNC } from './action-types';
import { eventChannel } from 'redux-saga';

function initWebsocket() {
  return eventChannel(emitter => {
    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,dash,litecoin');
    
    pricesWs.onmessage = (msg) => {
      const currencies = JSON.parse(msg.data);
      return emitter({ currencies });
    }

    return () => {  } //hacer stop de websocket cuando abandone la pagina
  })
}

function* getCurrencyPrice() {
  try {
    const websocket = yield call(initWebsocket);
    while(true) {
      const action = yield take(websocket);
      // yield put(action);

      yield put({
          type: CURRENCY_PRICE_ASYNC,
          payload: action
        })
    }
  }

  catch(error) {
    console.log(error);
  }

}
  export function* watchGetCurrency() {
  yield takeLatest(CURRENCY_PRICE, getCurrencyPrice);
}


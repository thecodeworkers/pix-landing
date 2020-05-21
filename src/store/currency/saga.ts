import { call, put, takeLatest, select, delay } from 'redux-saga/effects';
import { CURRENCY_PRICE, CURRENCY_PRICE_ASYNC } from './action-types';

function* getCurrencyPrice() {
  try {
 

  console.log('enter');


  // yield put({
  //   type: CURRENCY_PRICE,
  //   payload: 20
  // })
    
  }
  catch(error) {
    console.log(error);
    
  }

}


export function* watchGetCurrency() {
  yield takeLatest(CURRENCY_PRICE, getCurrencyPrice);
}


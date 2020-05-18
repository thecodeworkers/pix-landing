import { call, put, takeLatest, select, delay } from 'redux-saga/effects';
import { POST_NEWSLETTER, POST_NEWSLETTER_ASYNC } from './action-types';
import { fetchService, actionObject } from '../../utils';
import { language } from '../../utils/path';


function* postNewsletterAsync(action) {

  try {
    const data = yield call(fetchService, language, 'GET');
    const result = data.data;
    
    yield put({
      type: POST_NEWSLETTER_ASYNC,
      payload: result
    })
  }
  
  catch(error) {
    console.log(error);
    
  }
}

export function* watchPostNewsletter(){
  yield takeLatest(POST_NEWSLETTER, postNewsletterAsync);
}

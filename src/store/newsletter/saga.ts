import { call, put, takeLatest, select, delay } from 'redux-saga/effects';
import { POST_NEWSLETTER, POST_NEWSLETTER_ASYNC } from './action-types';
import { fetchService, actionObject } from '../../utils';
import { language } from '../../utils/path';

function* postNewsletterAsync() {
  try {
    yield put(actionObject(POST_NEWSLETTER_ASYNC, { loading: true }));

    yield delay(6000);    

    yield put(actionObject(POST_NEWSLETTER_ASYNC, { loading: false, success: true }));

    yield delay(3000);

    yield put(actionObject(POST_NEWSLETTER_ASYNC, { success: false }));
  }
  
  catch(error) {
    console.log(error);
  }
}

export function* watchPostNewsletter() {
  yield takeLatest(POST_NEWSLETTER, postNewsletterAsync);
}

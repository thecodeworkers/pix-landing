import { put, takeLatest, delay, call } from 'redux-saga/effects';
import { POST_NEWSLETTER, POST_NEWSLETTER_ASYNC } from './action-types';
import { fetchService, actionObject } from '../../utils';
import { save_susbcriber } from '../../utils/path';

function* postNewsletterAsync(action) {
  try {
    const { payload } = action;

    yield put(actionObject(POST_NEWSLETTER_ASYNC, { loading: true }));

    yield call(fetchService, `${save_susbcriber}`, 'POST', { email: payload });

    yield put(actionObject(POST_NEWSLETTER_ASYNC, { loading: false, result: 'success' }));
    yield delay(3000);
    yield put(actionObject(POST_NEWSLETTER_ASYNC, { result: null }));
  }
  
  catch(error) {
    yield put(actionObject(POST_NEWSLETTER_ASYNC, { loading: false, result: 'error' }));
    yield delay(3000);
    yield put(actionObject(POST_NEWSLETTER_ASYNC, { result: null }));
  }
}

export function* watchPostNewsletter() {
  yield takeLatest(POST_NEWSLETTER, postNewsletterAsync);
}

import { call  } from 'redux-saga/effects';
import { HOST_URL } from './path';
import { CONSUMER_TOKEN } from './environment';
import i18n from 'i18next';
import axios from 'axios';

function* fetchService(url, method = 'GET', params = null, auth = null) {
  const prefix = i18n.language;

  const objectParameters = {
    method,
    url: `${HOST_URL}${url}`,
    data: params,
    headers: {
      lang: prefix,
      Authorization: CONSUMER_TOKEN
    }
  }

  // if(auth) objectParameters['headers']['Authorization'] = auth;

  const res = yield call(axios, objectParameters);
  const resBody = res.data;

  return resBody;
}

export default fetchService;

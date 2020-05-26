import { POST_NEWSLETTER_ASYNC } from './action-types';

const initialState = {
  loading: false,
  success: false
}

const postNewsletter = (state = initialState, { type, payload }) => {

  switch(type) {
    case POST_NEWSLETTER_ASYNC:
    return { ...state, ...payload };

    default:
    return state;
  }
}

export default postNewsletter;

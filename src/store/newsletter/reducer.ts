import { POST_NEWSLETTER_ASYNC } from './action-types';

const initialState = {
  result: null
}

const postNewsletter = (state = initialState, action) => {

  switch(action.type) {
    case POST_NEWSLETTER_ASYNC: 
    return { result: action.payload };

    default:
    return state;
  }
}

export default postNewsletter;
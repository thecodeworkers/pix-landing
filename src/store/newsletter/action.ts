import { POST_NEWSLETTER  } from './action-types';
import { actionObject } from '../../utils';

export const postNewsletter = (newsletter) => {
  return actionObject(POST_NEWSLETTER, newsletter);
}


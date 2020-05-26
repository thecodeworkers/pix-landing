import { POST_NEWSLETTER  } from './action-types';
import { actionObject } from '../../utils';

export const postNewsletter = (email: string) => actionObject(POST_NEWSLETTER, email);

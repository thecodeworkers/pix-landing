import { SAVE_REFERENCE } from './action-types';

export const saveReference = (reference: any) => {
  return {
    type: SAVE_REFERENCE,
    payload: reference
  }
}

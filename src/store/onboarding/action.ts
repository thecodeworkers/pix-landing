import { SAVE_STEP } from './action-types';

export const saveStep = (step: any) => {
  return {
    type: SAVE_STEP,
    payload: step
  }
}

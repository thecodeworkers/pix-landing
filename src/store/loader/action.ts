import { SET_LOADER } from './action-types';

export const saveLoader = (load: any) => {
  return {
    type: SET_LOADER,
    payload: load
  }
}

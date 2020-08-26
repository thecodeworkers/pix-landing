import { CARD_FLIP } from './action-types';

export const saveCardFlip = (flipValue: any) => {
  return {
    type: CARD_FLIP,
    payload: flipValue
  }
}
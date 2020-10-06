export const actionObject = (type: string, payload: any = null) => ({ type, payload });

export const scrolling = (ref: any, number: number = null): void => {
  if(ref) {
    const target = ref.current;
    window.scrollTo({ top: !number ? target.offsetTop : target.offsetTop - number, behavior: 'smooth' });
  } 
}

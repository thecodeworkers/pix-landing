export const actionObject = (type: string, payload: any = null) => ({ type, payload });

export const scrolling = (ref: any): void => {
  const target = ref.current;
  window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  console.log(target,"TARGET");
  
}

export const actionObject = (type: string, payload: any = null) => ({ type, payload });

export const scrolling = (ref: any): void => {
  const target = ref.current;
  console.log(target)
  window.scrollTo({ left: target.offsetTop, behavior: 'smooth' });
}

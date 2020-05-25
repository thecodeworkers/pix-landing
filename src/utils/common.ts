export const actionObject = (type, payload = null) => {
  return { type, payload }
}

export const scrolling = (ref: any): void => {
  const target = ref.current;
  window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
}

export function functionCheckIsDOM(callBack: () => void) {
  if (typeof document !== 'undefined') callBack();
  else return null;
}

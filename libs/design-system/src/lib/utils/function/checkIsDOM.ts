export function checkIsDOM(callBack: () => void) {
  if (typeof document !== 'undefined') callBack();
  else return null;
}

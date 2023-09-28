export function functionCheckIsDOM(callBack: () => void): void | null {
  if (typeof document !== 'undefined') {
    callBack();
  } else {
    return null;
  }
}

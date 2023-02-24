export const throttle = (callBack: () => void, wait: number = 0) => {
  let time = Date.now();
  return function () {
    if ((time + wait - Date.now()) < 0) {
      callBack();
      time = Date.now();
    }
  }
}

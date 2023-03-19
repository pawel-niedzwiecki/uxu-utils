let lastTimeOut: ReturnType<typeof setTimeout> | null = null


export const throttle = (callBack: () => void, wait = 0) => {
  lastTimeOut && clearTimeout(lastTimeOut);
  lastTimeOut = setTimeout(callBack, wait)
}

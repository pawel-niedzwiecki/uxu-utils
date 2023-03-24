export class Throttle {
  public wait: number;
  private lastTimeOut: ReturnType<typeof setTimeout> | null;

  constructor({ wait }: { wait: number }) {
    this.wait = wait;
    this.lastTimeOut = null;
  }


  setLastTimeOut(callBack: () => void) {
    this.lastTimeOut && clearTimeout(this.lastTimeOut);
    this.lastTimeOut = setTimeout(callBack, this.wait);
  }

}


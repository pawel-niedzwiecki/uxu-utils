export class Throttle {
  private lastTimeOut: NodeJS.Timeout | null = null;
  constructor(public wait: number) {}

  public setLastTimeOut(callback: () => void): void {
    if (this.lastTimeOut) {
      clearTimeout(this.lastTimeOut);
    }
    this.lastTimeOut = setTimeout(callback, this.wait);
  }
}

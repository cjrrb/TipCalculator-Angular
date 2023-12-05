export class Order {
  costOfService: number;
  tipPercent: number;
  roundTip: boolean;

  public constructor() {
    this.costOfService = 0;
    this.tipPercent = 0;
    this.roundTip = false;
  }
}

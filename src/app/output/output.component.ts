import { Component, OnInit } from '@angular/core';
import {Order} from "../order";
import {OrderDataService} from "../order-data.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  title = 'Output';
  public order: Order;

  public constructor(dataService: OrderDataService) {
    this.order = dataService.order;
  }

  calculateTipAmount(): number {
    let tipAmount = this.order.costOfService * (this.order.tipPercent);

    if (this.order.roundTip) {
      tipAmount = Math.ceil(tipAmount);
    } else {
      tipAmount = Math.round(tipAmount * 100) / 100;
    }

    return tipAmount;
  }
}

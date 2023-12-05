import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Order} from "../order";
import {Router} from "@angular/router";
import {OrderDataService} from "../order-data.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  public title = 'Input';
  public form: FormGroup;
  public order: Order;
  public router: Router;

  public constructor(dataService: OrderDataService, router: Router) {
    this.order = dataService.order;
    this.router = router;

    this.form = new FormGroup({
      costOfService: new FormControl(0, [Validators.required, Validators.min(0)]),
      tipPercent: new FormControl(0),
      roundTip: new FormControl(false)
    });
  }

  public send(data: Order) {
    this.order.costOfService = +data.costOfService;
    this.order.tipPercent = +data.tipPercent;
    this.order.roundTip = data.roundTip;

    this.router.navigate(['output']).then(() => {
      console.log('OUTPUT DATA:');
      console.log(data);
    });
  }
  ngOnInit(): void {
  }
}

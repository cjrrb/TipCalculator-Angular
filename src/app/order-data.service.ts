import { Injectable } from '@angular/core';
import {Order} from "./order";

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  order: Order = new Order();
  constructor() { }
}

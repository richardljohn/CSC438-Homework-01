import { Injectable } from '@angular/core';
import { Item } from '../items.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private checkout_items: Item[] = [];

  constructor() { }

}

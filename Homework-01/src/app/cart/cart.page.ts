import { Component, OnInit } from '@angular/core';
import { Item } from '../items/items.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart_items: Item[];

  constructor() { }

  ngOnInit() {
  }

}

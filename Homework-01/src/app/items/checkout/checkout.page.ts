import { Component, OnInit } from '@angular/core';
import { Item } from '../items.model';
import { ItemsService } from '../items.service';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  checkout_items: Item[];

  constructor(private CheckoutService: CheckoutService, private ItemsService: ItemsService) { }

  ngOnInit() {
    this.checkout_items = this.ItemsService.getAllCartItems();
  }

}

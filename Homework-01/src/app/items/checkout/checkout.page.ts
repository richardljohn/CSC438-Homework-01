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

  onCalcTotal(){
    return this.CheckoutService.calculateTotal(this.checkout_items);
  }

  onCartTotal(){
    return this.CheckoutService.cartTotal(this.checkout_items);
  }

  onClear(){
    this.CheckoutService.clear(this.checkout_items);
  }

  onAddOneItem(i: Item){
    this.CheckoutService.addOneItem(this.checkout_items, i);
  }

  onRemoveOneItem(i: Item){
    this.CheckoutService.removeOneItem(this.checkout_items, i);
  }

}

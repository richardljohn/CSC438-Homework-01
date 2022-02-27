import { Injectable } from '@angular/core';
import { Item } from '../items.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private checkout_items: Item[] = [];

  constructor() { }

  calculateTotal(c_items: Item[]) {
    let total = 0;
    c_items.forEach((item, index) => {
      total += item.price * item.quantity;
    });
    return total; 
  }

  cartTotal(c_items: Item[]){
    let total = 0; 
    c_items.forEach((item, index) => {
      total += item.quantity;
    })
    return total;
  }

  clear(c_items: Item[]){
    c_items.forEach((item, index) => {
      item.quantity = 0;
    });
    c_items.splice(0, c_items.length);
  }

  addOneItem(c_items: Item[], anItem: Item){
    c_items.find(item => item === anItem).quantity++;
  }

  removeOneItem(c_items: Item[], anItem: Item){
    if(c_items.find(item => item === anItem).quantity < 1){
      return;
    }
    if(c_items.find(item => item === anItem).quantity === 1){
      c_items.forEach((element, index) => {
        if(element == anItem){
          element.quantity--;
          c_items.splice(index, 1);
        }
      });
    }
    else {
        c_items.find(item => item === anItem).quantity--;
      }
  }

}

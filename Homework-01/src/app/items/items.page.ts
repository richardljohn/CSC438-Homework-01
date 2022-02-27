import { Component, OnInit } from '@angular/core';
import {Item} from './items.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items: Item[];
  cart_items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService .getAllItems();
  }

  onAddCartItem(i: Item){
    this.itemsService.addItemToCart(i);
  }

  onRemoveCartItem(i: Item){
    this.itemsService.removeItemFromCart(i);
  }

}
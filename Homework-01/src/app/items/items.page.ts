import { Component, OnInit } from '@angular/core';
import {Item} from './items.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items: Item[] = [
    {
      id: 'rl',
      name: 'Schnitzel',
      imageUrl: 'https://platedcravings.com/wp-content/uploads/2019/08/Schnitzel-Plated-Cravings-13.jpg',
      price: '9.99'
    },
    {
      id: "sp",
      name: "Spaghetti",
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg',
      price: '14.99'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

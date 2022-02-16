import { Injectable } from '@angular/core';
import {Item} from './items.model';


@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  private items: Item[] = [
    {
      id: 'r1',
      name: 'Schnitzel',
      imageUrl: 'https://platedcravings.com/wp-content/uploads/2019/08/Schnitzel-Plated-Cravings-13.jpg',
      ingredients: ['French Fries', 'Fish Meat', 'Vegetables']
    },
    {
      id: "r2",
      name: "Spaghetti",
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg',
      ingredients: ['Spaghetti', 'Tomatoes', 'Pork Meat']
    }
  ];

  constructor() { }

  getAllItems(){
    return [...this.items];
  }

  getItem(itemId: string){
    return {...this.items.find(item => item.id === itemId)};
  }
}

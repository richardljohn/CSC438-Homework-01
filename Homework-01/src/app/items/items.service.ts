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
    },
    {
      id: "r3",
      name: "Chicken Tikka Masala",
      imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chicken-tikka-masala_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1567523604572.jpeg',
      ingredients: ['Chicken', 'Cream', 'Garam Masala']
    },
    {
      id: "r4", 
      name: "Shrimp with Broccoli ",
      imageUrl: "https://i.ytimg.com/vi/7iIwkfO8ynU/maxresdefault.jpg",
      ingredients: ['Shrimp', 'Broccoli', 'Brown Sauce']
    },
    {
      id: "r5",
      name: "Lamb Shawarma",
      imageUrl: 'https://cdn.shopify.com/s/files/1/0148/1945/9126/articles/Beef_and_Lamb_Shawarma_720x.jpg?v=1606512358',
      ingredients: ['Lamb', 'French Fries', 'Olive Oil']
    }
  ];

  constructor() { }

  getAllItems(){
    return [...this.items];
  }

  getItem(itemId: string){
    return {...this.items.find(item => item.id === itemId)};
  }

  deleteItem(itemId: string){
    this.items = this.items.filter(item => item.id !== itemId);
  }
}

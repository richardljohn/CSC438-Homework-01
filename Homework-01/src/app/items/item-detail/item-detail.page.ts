import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { Item } from '../items.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  loadedItem: Item;


  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('itemId')){
        return;
      }
      const itemId = paraMap.get('itemId');
      this.loadedItem = this.itemService.getItem(itemId);
    });
  }

  onDeleteRecipe(){
    this.itemService.deleteItem(this.loadedItem.id)
  }

}

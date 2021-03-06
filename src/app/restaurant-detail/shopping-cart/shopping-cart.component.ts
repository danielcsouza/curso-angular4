import { Component, OnInit } from '@angular/core';
import { ShopingCartService  } from './shopping-cart.service';



@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shopingCartService: ShopingCartService) { }

  ngOnInit() {
  }

  items():any[]{
    return this.shopingCartService.item;
  }

  total():number{
    return this.shopingCartService.total();
  }

  clear(){
    this.shopingCartService.clear();
  }

  removeItem(item :any){
    this.shopingCartService.removeItem(item);
  }

  addItem(item :any){
    this.shopingCartService.addItem(item);
  }
}

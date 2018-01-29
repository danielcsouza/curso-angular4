import { Injectable } from '@angular/core';
import { ShopingCartService } from '../../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../../restaurant-detail/shopping-cart/carts-item.model';


@Injectable()
export class OrderService{
  constructor(private cartServices: ShopingCartService){

  }

  cartItems(): CartItem[]{
    return this.cartServices.item;
  }

  increaseQty(item: CartItem){
    this.cartServices.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.cartServices.decreaseQty(item);
  }


  remove(item: CartItem){
    this.cartServices.removeItem(item);
  }
}

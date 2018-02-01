import { Injectable } from '@angular/core';
import { ShopingCartService } from '../../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../../restaurant-detail/shopping-cart/carts-item.model';
import { Order, OrderItem } from 'app/order/order.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MEAT_API } from 'app/app.api';


@Injectable()
export class OrderService{
  constructor(private cartServices: ShopingCartService, private http: Http){}

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

  itensValue(): number{
    return this.cartServices.total()
  }

  clear(){
    this.cartServices.clear();
  }

  checkOrder(order: Order): Observable<any>{
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(MEAT_API + '/orders', JSON.stringify(order), new RequestOptions({headers: headers}))
    .map(response=>response.json)
  }
}

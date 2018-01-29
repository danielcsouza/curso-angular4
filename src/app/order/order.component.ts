import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order-items/order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/carts-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro ', value: 'DIN'},
    {label: 'Cartão de Débito ', value: 'DEB'},
    {label: 'Vale Refeição ', value: 'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }


  cartItems(): CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }


  remove(item: CartItem){
    this.orderService.remove(item);
  }


}

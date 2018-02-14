import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order-items/order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/carts-item.model';
import { Order, OrderItem } from 'app/order/order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  delivery: number = 8;

    paymentOptions: RadioOption[] = [
    {label: 'Dinheiro ', value: 'DIN'},
    {label: 'Cartão de Débito ', value: 'DEB'},
    {label: 'Vale Refeição ', value: 'REF'}
  ]

  constructor(private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: '', // forma abrebiada
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      complement: this.formBuilder.control(''),
      paymentOptions: this.formBuilder.control('')

    })
  }

  itemsValue(): number{
    return this.orderService.itensValue();
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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
    .map((item:CartItem) => new OrderItem(item.quantity,item.menuItem.id));
    this.orderService.checkOrder(order)
    .subscribe((orderId:Order) => {
      this.router.navigate(['/order-summary'])
     // console.log('Compra concluída:' + orderId)
      this.orderService.clear()
    })
    //console.log(order);
  }


}

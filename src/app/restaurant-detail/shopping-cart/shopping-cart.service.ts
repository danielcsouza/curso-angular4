import { CartItem } from 'app/restaurant-detail/shopping-cart/carts-item.model';
import { MenuItem } from '../menu-item/menu-item.model';


export class ShopingCartService{
  item: CartItem[] = [];

  clear(){
    this.item = [];
  }

  addItem(item: MenuItem){

    let fountItem = this.item.find((m)=> m.menuItem.id == item.id);
    if(fountItem){
     // fountItem.quantity  = fountItem.quantity + 1;
     this.increaseQty(fountItem);
    }else{
      this.item.push(new CartItem(item));
    }

  }

  removeItem(item: CartItem){
    this.item.splice(this.item.indexOf(item),1);
  }

  total(): number{
    return this.item
    .map(p=>p.value())
    .reduce((prev,value) => prev + value, 0)

  }

  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1;
    if (item.quantity === 0){
      this.removeItem(item);
    }

  }
}

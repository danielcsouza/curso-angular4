class Order{
constructor(
  public id: number,
  public address: string,
  public number: number,
  public complement: string,
  public paymentOption: string,
  public orderItems: OrderItem[] = []
){}

}

class OrderItem{
  constructor(public quantity: number, public menuId: string){}
}

export {Order, OrderItem}

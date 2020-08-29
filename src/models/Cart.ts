import { CartItem } from './CartItem';

export class Cart {
  public cartItems: Set<CartItem>;
  public total: number;
  

  constructor() {
    this.cartItems = new Set<CartItem>();
    this.total = 0;
  }

  public add(cartItem: CartItem): void {
    let newCartItem = cartItem;
    for (const item of this.cartItems) {
      if (cartItem.name === item.name) {
        newCartItem = new CartItem(item.name, (cartItem.quantity + item.quantity), item.price)
      }
    }
    this.cartItems.add(newCartItem);
    this.total += cartItem.quantity * cartItem.price;
  }

  public cartTotal(): number {
    return this.cartItems.size;
  }

  public totalItems(itemName: string): number {
    let count = 0;
    for (const item of this.cartItems) {
      if (itemName === item.name) {
        count = item.quantity;
      }
    }
    return count;
  }

  public calculateCartTotal(): number {
    return Math.round(this.total * 100) / 100;
  }

  public calculateSalesTax(): number {
    return Math.round((this.total * 0.125) * 100 / 100);
  }

  public calculateTotalWithTax(tax: number): number {
    return this.total + tax;
  }

}
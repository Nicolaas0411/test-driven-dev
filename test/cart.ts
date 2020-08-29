import { Cart } from '../src/models/Cart';
import { expect } from 'chai';
import { CartItem } from '../src/models/CartItem';

describe('shopping cart', () => {


  it('check cart contains 5 dove soaps', () => {
    const cart = new Cart();
    const soap = new CartItem('dove', 5, 39.99);
    cart.add(soap);

    expect(cart.totalItems(soap.name)).to.equal(5);
  });

  it('cart should initially have 0 items', () => {
    const cart = new Cart();
    expect(cart.cartTotal()).to.equal(0);
  });

  it('total price for 5 dove soaps should be 199.95', () => {
    const cart = new Cart();
    const soap = new CartItem('dove', 5, 39.99);
    cart.add(soap);
    expect(cart.calculateCartTotal()).to.equal(199.95);
  })

  it('add multiple quantities if dove soap twice', () => {
    const cart = new Cart();
    const soap1 = new CartItem('dove', 5, 39.99);
    const soap2 = new CartItem('dove', 3, 39.99);
    cart.add(soap1);
    cart.add(soap2);
    expect(cart.calculateCartTotal()).to.equal(319.92);
    expect(cart.totalItems('dove')).to.equal(8);
  })

  // sales tax = 12.5%


  it('add multiple types of items to cart and verify totals', () => {
    const cart = new Cart();
    const soap = new CartItem('dove', 2, 39.99);
    const axe = new CartItem('axe', 2, 99.99);
    cart.add(soap);
    cart.add(axe);

    expect(cart.calculateCartTotal()).to.equal(279.96);
    const tax = cart.calculateSalesTax();

    expect(cart.totalItems('dove')).to.equal(2);
    expect(cart.totalItems('axe')).to.equal(2);
    expect(tax).to.equal(35.00);
    expect(cart.calculateTotalWithTax(tax)).to.equal(314.96);
  })

})
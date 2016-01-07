/// <reference path="../app.ts" />
'use strict';

module t2C3AngularApp {
  export class ShoppingCartService {

    private cart = [];
    private cartItem;

    public getCart() {
      return this.cart;
    }

    public addItem(item) {
      this.cart.push(item);
    }

    public removeItem(index) {
      this.cart.splice(index, 1);
    }

    public getProductByProductID(id) {
      for (var i=0; i < this.cart.length; i++) {
        if(this.cart[i].product.id === id) {
          return this.cart[i].product;
        }
      }
      return null;
    }

    public increaseQuantityByProductId(id) {
      for (var i=0; i < this.cart.length; i++) {
        if(this.cart[i].product.id === id) {
          this.cart[i].amount = this.cart[i].amount + 1;
        }
      }
    }


    //public increaseQuantity(item) {
    //  item.quantity = item.quantity + 1;
    //}


  }


  angular.module('t2C3AngularApp').service('shoppingCartService', t2C3AngularApp.ShoppingCartService);
}

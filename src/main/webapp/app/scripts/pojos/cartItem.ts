// Dependencies declared here so TypeScript does not nag
/// <reference path="../app.ts" />
/// <reference path="../pojos/product.ts" />


'use strict';
/**
 * cartItem object to be stored in order
 */
module t2C3AngularApp{
  export class CartItem{
    private product : Product;
    private quantity : number;
    private price : number;
    public setProduct(product : Product){
      this.product = product;
    }

    public increaseQuantity(){
      this.quantity++;
    }
    public decreaseQuantity(){
      this.quantity--;
    }
  }
}

//angular.module('myApp', [])
//  .service('Order', t2C3AngularApp.Order)

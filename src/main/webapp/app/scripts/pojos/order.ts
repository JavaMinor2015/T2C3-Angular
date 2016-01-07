// Dependencies declared here so TypeScript does not nag
/// <reference path="../app.ts" />
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/cartItem.ts"/>
'use strict';
/**
 * Order object to be sent to server.
 */
module t2C3AngularApp{
  export class Order{
    private userInfo : UserInfo;
    private cartItems : Array<CartItem>;

    public setUserInfo(userInfo : UserInfo){
      this.userInfo = userInfo;
    }

    public setCartItems(cartItems : Array<CartItem>){
      this.cartItems = cartItems;
    }
  }
}

//angular.module('myApp', [])
//  .service('Order', t2C3AngularApp.Order)

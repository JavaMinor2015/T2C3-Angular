// Dependencies declared here so TypeScript does not nag
/// <reference path="../app.ts" />
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/cartItem.ts"/>
/// <reference path="../pojos/token.ts"/>
'use strict';
/**
 * Order object to be sent to server.
 */
module t2C3AngularApp {
  export class Order {
    private customerData : UserInfo;
    private items : Array<CartItem>;
    private token : Token;

    public setUserInfo(userInfo : UserInfo) {
      this.customerData = userInfo;
    }

    public setCartItems(cartItems : Array<CartItem>) {
      this.items = cartItems;
    }

    public setSecurityToken(token : Token) {
      this.token = token;
    }
  }
}

//angular.module('myApp', [])
//  .service('Order', t2C3AngularApp.Order)

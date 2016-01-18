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
    public id : string;
    public items : Array<any>;
    public customerData : UserInfo;
    public status : string;
    public totalPrice: number;
    private token : Token;



    public setUserInfo(userInfo : UserInfo) {
      this.customerData = userInfo;
    }

    public setCartItems(cartItems : Array<any>) {
      this.items = cartItems;
    }

    public setSecurityToken(token : Token) {
      this.token = token;
    }
  }
}

//angular.module('myApp', [])
//  .service('Order', t2C3AngularApp.Order)

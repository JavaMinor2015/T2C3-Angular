// Dependencies declared here so TypeScript does not nag
/// <reference path="../app.ts" />
/// <reference path="../pojos/userInfo.ts"/>

'use strict';
/**
 * Order object to be sent to server.
 */
module t2C3AngularApp{
  export class Order{
    private userInfo : UserInfo;
    private cartItems : Array<any>;

    public setUserInfo(userInfo : UserInfo){
      this.userInfo = userInfo;
    }

    public setCartItems(cartItems : Array<any>){
      this.cartItems = cartItems;
    }
  }
}

//angular.module('myApp', [])
//  .service('Order', t2C3AngularApp.Order)

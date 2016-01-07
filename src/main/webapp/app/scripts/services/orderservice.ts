// Dependencies declared here so TypeScript does not nag
/// <reference path="../app.ts" />
/// <reference path="../pojos/order.ts"/>
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../resources/orderResource.ts"/>

'use strict';
module t2C3AngularApp {
  export class Orderservice {
    private _order: t2C3AngularApp.Order = new t2C3AngularApp.Order(); // Current order object

    /**
     * Sets cartItems for current order.
     * @param _cartItems
     */
    public setCartItems(cartItems:Array<any>) {
      this._order.setCartItems(cartItems);
    }

    /**
     * Sets user info for order and sends order to server if any cartItems exist.
     * @param _userInfo
     */
    private setUserInfo(userInfo) {
      // Todo: Possible checks like if any cartItems exist in shoppingcart before placing an order
      this._order.setUserInfo(userInfo);
    }

    /**
     * Send the order to the server
     */
    public placeOrder(userInfo : UserInfo) {
      console.log('OrderNow executed');
      console.log(userInfo);
      // If userInfo is not empty

        this._order.setUserInfo(userInfo);


      // Todo: Send order object to server to create an order over REST post

      // Cleanup this order because it was already sent to server

    }

    /**
     * Reset this order to empty
     */
    public clearOrder() {
      this._order.setUserInfo(null);
      this._order.setCartItems([]);
    }

    get order():t2C3AngularApp.Order{
          return this._order;
          }
  }
}

angular.module('t2C3AngularApp')
  .service('orderService', t2C3AngularApp.Orderservice);


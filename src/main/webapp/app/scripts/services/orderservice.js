// Dependencies declared here so TypeScript does not nag
/// <reference path="../app.ts" />
/// <reference path="../pojos/order.ts"/>
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../resources/orderResource.ts"/>
'use strict';
var t2C3AngularApp;
(function (t2C3AngularApp) {
    var Orderservice = (function () {
        function Orderservice() {
            this._order = new t2C3AngularApp.Order(); // Current order object
        }
        /**
         * Sets cartItems for current order.
         * @param _cartItems
         */
        Orderservice.prototype.setCartItems = function (cartItems) {
            this._order.setCartItems(cartItems);
        };
        /**
         * Sets user info for order and sends order to server if any cartItems exist.
         * @param _userInfo
         */
        Orderservice.prototype.setUserInfo = function (userInfo) {
            // Todo: Possible checks like if any cartItems exist in shoppingcart before placing an order
            this._order.setUserInfo(userInfo);
        };
        /**
         * Send the order to the server
         */
        Orderservice.prototype.placeOrder = function (userInfo) {
            console.log('OrderNow executed');
            console.log(userInfo);
            // If userInfo is not empty
            this._order.setUserInfo(userInfo);
            // Todo: Send order object to server to create an order over REST post
            // Cleanup this order because it was already sent to server
        };
        /**
         * Reset this order to empty
         */
        Orderservice.prototype.clearOrder = function () {
            this._order.setUserInfo(null);
            this._order.setCartItems([]);
        };
        Object.defineProperty(Orderservice.prototype, "order", {
            get: function () {
                return this._order;
            },
            enumerable: true,
            configurable: true
        });
        return Orderservice;
    })();
    t2C3AngularApp.Orderservice = Orderservice;
})(t2C3AngularApp || (t2C3AngularApp = {}));
angular.module('t2C3AngularApp')
    .service('orderService', t2C3AngularApp.Orderservice);
//# sourceMappingURL=orderservice.js.map
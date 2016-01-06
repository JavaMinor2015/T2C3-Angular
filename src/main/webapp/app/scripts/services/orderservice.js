// Dependencies declared here so TypeScript does not nag
/// <reference path="../app.ts" />
/// <reference path="../pojos/Order.ts"/>
'use strict';
var t2C3AngularApp;
(function (t2C3AngularApp) {
    var Orderservice = (function () {
        function Orderservice() {
            this.order = new t2C3AngularApp.Order(); // Current order object
        }
        /**
         * Sets cartItems for current order.
         * @param _cartItems
         */
        Orderservice.prototype.setCartItems = function (cartItems) {
            this.order.setCartItems(cartItems);
        };
        /**
         * Sets user info for order and sends order to server if any cartItems exist.
         * @param _userInfo
         */
        Orderservice.prototype.setUserInfo = function (userInfo) {
            // Todo: Possible checks like if any cartItems exist in shoppingcart before placing an order
            this.order.setUserInfo(userInfo);
        };
        /**
         * Send the order to the server
         */
        Orderservice.prototype.placeOrder = function (userInfo) {
            console.log('OrderNow executed');
            console.log(userInfo);
            // If userInfo is not empty
            if (userInfo === new t2C3AngularApp.UserInfo()) {
                this.order.setUserInfo(userInfo);
            }
            // Todo: Send order object to server to create an order over REST post
            // Cleanup this order because it was already sent to server
            this.clearOrder();
        };
        /**
         * Reset this order to empty
         */
        Orderservice.prototype.clearOrder = function () {
            this.order.setUserInfo(null);
            this.order.setCartItems([]);
        };
        return Orderservice;
    })();
    t2C3AngularApp.Orderservice = Orderservice;
})(t2C3AngularApp || (t2C3AngularApp = {}));
angular.module('t2C3AngularApp')
    .service('orderService', t2C3AngularApp.Orderservice);
//# sourceMappingURL=orderservice.js.map
// Dependencies declared here so TypeScript does not nag
/// <reference path="../app.ts" />
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/cartItem.ts"/>
'use strict';
/**
 * Order object to be sent to server.
 */
var t2C3AngularApp;
(function (t2C3AngularApp) {
    var Order = (function () {
        function Order() {
        }
        Order.prototype.setUserInfo = function (userInfo) {
            this.customerData = userInfo;
        };
        Order.prototype.setCartItems = function (cartItems) {
            this.items = cartItems;
        };
        return Order;
    })();
    t2C3AngularApp.Order = Order;
})(t2C3AngularApp || (t2C3AngularApp = {}));
//angular.module('myApp', [])
//  .service('Order', t2C3AngularApp.Order)
//# sourceMappingURL=order.js.map
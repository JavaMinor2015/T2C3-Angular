/// <reference path="../app.ts" />
'use strict';
var t2C3AngularApp;
(function (t2C3AngularApp) {
    var ShoppingCartService = (function () {
        function ShoppingCartService() {
            this.cart = [];
        }
        ShoppingCartService.prototype.getCart = function () {
            return this.cart;
        };
        ShoppingCartService.prototype.addItem = function (item) {
            this.cart.push(item);
        };
        ShoppingCartService.prototype.removeItem = function (index) {
            this.cart.splice(index, 1);
        };
        ShoppingCartService.prototype.getProductByProductID = function (id) {
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i].product.id === id) {
                    return this.cart[i].product;
                }
            }
            return null;
        };
        ShoppingCartService.prototype.increaseQuantityByProductId = function (id) {
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i].product.id === id) {
                    this.cart[i].amount = this.cart[i].amount + 1;
                }
            }
        };
        return ShoppingCartService;
    })();
    t2C3AngularApp.ShoppingCartService = ShoppingCartService;
    angular.module('t2C3AngularApp').service('shoppingCartService', t2C3AngularApp.ShoppingCartService);
})(t2C3AngularApp || (t2C3AngularApp = {}));
//# sourceMappingURL=shoppingCartService.js.map
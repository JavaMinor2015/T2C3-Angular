/// <reference path="../app.ts" />
'use strict';
var t2C3AngularApp;
(function (t2C3AngularApp) {
    var ShoppingCartService = (function () {
        function ShoppingCartService() {
        }
        ShoppingCartService.prototype.getWelcomeMessage = function () {
            var hello = 'hello';
            return hello;
        };
        return ShoppingCartService;
    })();
    t2C3AngularApp.ShoppingCartService = ShoppingCartService;
    angular.module('t2C3AngularApp.services', []).service('ShoppingCartService');
})(t2C3AngularApp || (t2C3AngularApp = {}));
//# sourceMappingURL=shoppingCartService.js.map
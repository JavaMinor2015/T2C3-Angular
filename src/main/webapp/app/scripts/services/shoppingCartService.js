/// <reference path="../app.ts" />
'use strict';
var t2C3AngularApp;
(function (t2C3AngularApp) {
    var ShoppingCartService = (function () {
        function ShoppingCartService() {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return ShoppingCartService;
    })();
    t2C3AngularApp.ShoppingCartService = ShoppingCartService;
})(t2C3AngularApp || (t2C3AngularApp = {}));
angular.module('t2C3AngularApp')
    .service('shoppingCartService', t2C3AngularApp.ShoppingCartService);
//# sourceMappingURL=shoppingCartService.js.map
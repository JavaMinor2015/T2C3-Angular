/// <reference path="../app.ts" />
'use strict';
var t2C3AngularApp;
(function (t2C3AngularApp) {
    var Orderservice = (function () {
        function Orderservice() {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return Orderservice;
    })();
    t2C3AngularApp.Orderservice = Orderservice;
})(t2C3AngularApp || (t2C3AngularApp = {}));
angular.module('t2C3AngularApp')
    .service('orderService', t2C3AngularApp.Orderservice);
//# sourceMappingURL=orderservice.js.map
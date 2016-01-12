/// <reference path="../app.ts" />
/// <reference path="../pojos/order.ts"/>
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/address.ts"/>
'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
    .controller('OrderCtrl', ['$scope', 'orderService', '$location', 'orderResource', function ($scope, orderService, $location, orderResource) {
        $scope.placeOrder = function () {
            console.log('clicked order');
            // Unfortunately no direct binding and have type safety in angular 1.x + typescript
            // without rewriting this as a typescript controller with all troubles it comes with.
            var userInfo = new t2C3AngularApp.UserInfo(); // jshint ignore:line
            var address = new t2C3AngularApp.Address; // jshint ignore:line
            userInfo.setFirstName(this.firstName);
            userInfo.setLastName(this.lastName);
            address.setStreet(this.street);
            address.setStreetNumber(this.streetNumber);
            address.setCity(this.city);
            address.setZipcode(this.zipcode);
            //console.log(this.address);
            userInfo.setAddress(address);
            userInfo.setEmailAddress(this.emailAddress);
            // Pass userInfo object to orderService
            orderService.placeOrder(userInfo);
            orderResource.save(orderService.order);
            // Navigate to thank you page
            $location.path('/thanksOrder');
        };
    }]);
//# sourceMappingURL=orderCreate.js.map
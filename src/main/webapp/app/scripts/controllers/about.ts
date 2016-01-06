'use strict';

/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
  .controller('AboutCtrl', ['ShoppingCartService', function (ShoppingCartService) {
    this.awesomeThings = ShoppingCartService.awesomeThings;
  }]);

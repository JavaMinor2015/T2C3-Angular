'use strict';

angular.module('t2C3AngularApp')
  .controller('AboutCtrl', ['$scope', 'ShoppingCartService',function ($scope, shoppingCartService) {
    $scope.helloMessage2 = 'sfdf';
    $scope.helloMessage = shoppingCartService.getWelcomeMessage();
  }]);

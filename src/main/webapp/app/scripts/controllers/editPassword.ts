/// <reference path="../app.ts" />
/// <reference path="../pojos/order.ts"/>
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/customer.ts"/>
/// <reference path="../pojos/credentials.ts"/>
/// <reference path="../pojos/address.ts"/>

angular.module('t2C3AngularApp')
  .controller('EditPasswordCtrl', ['$scope', 'userService', 'customerCredentialResource',
    function ($scope, userService, customerCredentialResource) {

      let customer : t2C3AngularApp.Customer;
      customer = userService.getCustomer();
      $scope.username = customer.username;


      $scope.updatePassword = function () {
        customerCredentialResource.update({id: customer.id}, {
          username: customer.username,
          password: $scope.newPassword
        });
        console.log("updatePassword");
      };

    }]);

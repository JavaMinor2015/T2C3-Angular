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
        $scope.resultText = '';
        $scope.errorResponseText = '';
        customerCredentialResource.update({id: customer.id}, {
          username: customer.username,
          password: $scope.newPassword
        }, function onSuccess(response){
          $scope.resultText = 'Password updated.';
          console.log(response);
        }, function onError(response){
          $scope.errorResponseText = 'Failed to change password.';
          console.log(response);
        });
        console.log("updatePassword");
      };

    }]);

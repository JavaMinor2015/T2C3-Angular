/// <reference path="../app.ts" />
/// <reference path="../pojos/credentials.ts" />
'use strict';
angular.module('t2C3AngularApp')
  .controller('LoginCtrl', ['$scope', 'UserService', '$http', '$location'
    , function ($scope, userService, $http, $location) {
      $scope.loginCustomer = function () {
        // Unfortunately no direct binding and have type safety in angular 1.x + typescript
        // without rewriting this as a typescript controller with all troubles it comes with.
        let credentials : t2C3AngularApp.Credentials = new t2C3AngularApp.Credentials;
        credentials.setUsername(this.username);
        credentials.setPassword(this.password);

        $http.post('http://localhost:6789/login', credentials).then(function (response) {
            response.data.username = credentials.getUsername();
            console.log(response.data.username);
            userService.login(response.data);
            $location.path('/');
          }
        );
      };

      $scope.loggedIn = function () {
        return userService.isLoggedIn();
      };

      $scope.logOut = function () {
        console.log(userService.getSecurityToken());
        $http.post('http://localhost:6789/logout', userService.getSecurityToken()).error(function(response){
          // On Error
          console.log(response);
        });
        // Logout locally
        userService.logout();
      };
    }]);

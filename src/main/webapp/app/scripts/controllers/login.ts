/// <reference path="../app.ts" />
/// <reference path="../pojos/credentials.ts" />
'use strict';
angular.module('t2C3AngularApp')
  .controller('LoginCtrl', ['$scope', 'userService', '$http', '$location'
    , function ($scope, userService, $http, $location) {
      $scope.loginCustomer = function () {
        // Unfortunately no direct binding and have type safety in angular 1.x + typescript
        // without rewriting this as a typescript controller with all troubles it comes with.
        let credentials : t2C3AngularApp.Credentials = new t2C3AngularApp.Credentials;
        credentials.setUsername(this.username);
        credentials.setPassword(this.password);

        $http.post('http://localhost:6789/login', credentials).then(function successCallback(response) {
            response.data.username = credentials.getUsername();
            console.log(response.data);
            userService.login(response.data);
            let tokenValueKey = 'tokenValue';
            $http.defaults.headers.common[tokenValueKey] = response.data.value;
            $location.path('/');
          },
          function (response) {
            console.log("Login error (" + response.status + ") response:");
            console.log(response);
            $scope.errorResponseText = response.data.message; // Sets / shows error response text to user
          }
        );
      };

      $scope.loggedIn = function () {
        return userService.isLoggedIn();
      };

      $scope.logOut = function () {
        console.log(userService.getSecurityToken());
        $http.post('http://localhost:6789/logout', userService.getSecurityToken()).error(function (response) {
          // On Error
          console.log("Logout error (" + response.status + ") response:");
          console.log(response);
        });
        let tokenValueKey = 'tokenValue';
        $http.defaults.headers.common[tokenValueKey] = null;
        userService.logout();
      };
    }]);

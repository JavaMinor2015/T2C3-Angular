/// <reference path="../app.ts" />

'use strict';
let customerCredentialResource = angular.module('customerCredentialResource', ['ngResource']);

customerCredentialResource.factory('customerCredentialResource', ['$resource',
  function ($resource) {
    return $resource('http://localhost:6789/customers/:id/credentials',{},
      {
        'update': { method:'PUT' }
      });
  }]);

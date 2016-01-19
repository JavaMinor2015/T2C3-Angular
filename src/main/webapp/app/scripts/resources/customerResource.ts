/// <reference path="../app.ts" />

'use strict';
let customerResource = angular.module('customerResource', ['ngResource']);

customerResource.factory('customerResource', ['$resource',
  function ($resource) {
    return $resource('http://localhost:6789/customers/:id', {},
      {
        'update': {method: 'PUT'}
      });
  }]);

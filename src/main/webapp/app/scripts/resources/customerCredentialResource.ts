/// <reference path="../app.ts" />

'use strict';
let customerOrderResource = angular.module('customerOrderResource', ['ngResource']);

customerOrderResource.factory('customerOrderResource', ['$resource',
  function ($resource) {
    return $resource('http://localhost:6789/customers/:id/orders',{},{
      get: {method: 'GET', isArray: true}
    });


  }]);

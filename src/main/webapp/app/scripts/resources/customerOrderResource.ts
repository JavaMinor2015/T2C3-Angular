/// <reference path="../app.ts" />

'use strict';
let orderResource = angular.module('customerOrderResource', ['ngResource']);

orderResource.factory('customerOrderResource', ['$resource',
  function ($resource) {
    return $resource('http://localhost:6789/customers/:id/orders',{},{
      get: {method: 'GET', isArray: true}
    });


  }]);



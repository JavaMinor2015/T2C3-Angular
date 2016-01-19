/// <reference path="../app.ts" />
'use strict';
let orderResource = angular.module('orderResource', ['ngResource']);

orderResource.factory('orderResource', ['$resource',
  function ($resource) {
    return $resource('http://localhost:6789/order/:id',{},{
      'update': { method:'PUT' }
    });
  }
]);

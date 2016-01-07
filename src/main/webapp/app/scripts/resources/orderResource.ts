'use strict';
var orderResource = angular.module('orderResource', ['ngResource']);

orderResource.factory('orderResource', ['$resource',
  function($resource) {
    return $resource('http://localhost:6789/order');
  }
]);

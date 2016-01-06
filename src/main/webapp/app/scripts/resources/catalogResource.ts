'use strict';
var catalogResource = angular.module('catalogResource', ['ngResource']);

catalogResource.factory('catalogResource', ['$resource',
  function($resource){
    return $resource('http://localhost:8080/products', {}, {
        query: {method:'GET', params:{}, isArray:true}
      });
  }
]);

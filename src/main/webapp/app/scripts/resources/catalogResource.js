'use strict';
var catalogResource = angular.module('catalogResource', ['ngResource']);
catalogResource.factory('catalogResource', ['$resource',
    function ($resource) {
        return $resource('http://localhost:6789/products', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
    }
]);
//# sourceMappingURL=catalogResource.js.map
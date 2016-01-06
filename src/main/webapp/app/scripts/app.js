'use strict';
/**
 * @ngdoc overview
 * @name t2C3AngularApp
 * @description
 * # t2C3AngularApp
 *
 * Main module of the application.
 */
angular
    .module('t2C3AngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'catalogResource'
])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
        .when('/catalog', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalog'
    })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
        .otherwise({
        redirectTo: '/'
    });
});
//# sourceMappingURL=app.js.map
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
    'catalogResource',
    't2C3AngularApp.services'
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
        .when('/shoppingCart', {
        templateUrl: 'views/shoppingCart.html',
        controller: 'ShoppingCartCtrl',
        controllerAs: 'shoppingCart'
    })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
        .when('/shoppingCart', {
        templateUrl: 'views/shoppingCart.html',
        controller: 'ShoppingCartCtrl',
        controllerAs: 'shoppingCart'
    })
        .when('/orderCreate', {
        templateUrl: 'views/orderCreate.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
    })
        .otherwise({
        redirectTo: '/'
    });
});
//angular.module('t2C3AngularApp.services', []);
//# sourceMappingURL=app.js.map
/// <reference path="typings/angularjs/angular.d.ts" />
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
    'orderResource',
    'customerOrderResource',
    'customerResource',
    'customerCredentialResource'
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
      .when('/thanksOrder', {
        templateUrl: 'views/thanksOrder.html'
        //,
        //controller: 'OrderCtrl',
        //controllerAs: 'order'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/myorders', {
        templateUrl: 'views/customerOrders.html',
        controller: 'CustomerOrderCtrl',
        controllerAs: 'customerOrder'
      })
      .when('/account', {
        templateUrl: 'views/editCustomer.html',
        controller: 'EditCustomerCtrl',
        controllerAs: 'editCustomer'
      })
      .when('/password', {
        templateUrl: 'views/editPassword.html',
        controller: 'EditPasswordCtrl',
        controllerAs: 'editPassword'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//angular.module('t2C3AngularApp.services', []);

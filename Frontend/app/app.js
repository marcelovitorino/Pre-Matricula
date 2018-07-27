'use strict';
var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/login', {
          templateUrl: 'login.html',
          controller: 'HomeController',
      })
    
      .otherwise({
        redirectTo: '/home',
      });

}]);
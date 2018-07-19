'use strict';
var app = angular.module('preMatricula',['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/home', {
          templateUrl: 'home.html',
          controller: 'HomeController',
      })
    
      .otherwise({
        redirectTo: '/home',
      });

}]);
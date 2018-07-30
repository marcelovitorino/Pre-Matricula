
var app = angular.module('app',['ngStorage','ngRoute','socialLogin']);

app.config(function($routeProvider, $locationProvider) {
     // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

    .when('/dashboard', {
      templateUrl: 'app/views/Dashboard.html',
      controller: 'DashboardController',
      requireAuth: true,
     
    })
      .when('/login', {
          templateUrl: 'app/views/Login.html',
          controller: 'LoginController'
      })
      .when('/userData', {
        templateUrl: 'app/views/UserData.html',
        controller: 'UserDataController',
        requireAuth: true,
      
    })
      .otherwise({
        redirectTo: '/dashboard'
      });

    });


    app.config(function(socialProvider){
      socialProvider.setGoogleKey("693340193789-olh1a18b3oj5ood2upnbblunvng708jm.apps.googleusercontent.com");
  });
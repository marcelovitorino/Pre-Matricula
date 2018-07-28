
var app = angular.module('app',['ngStorage','ngRoute','socialLogin']);

app.config(function($routeProvider, $locationProvider) {
     // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

    .when('/home', {
      templateUrl: 'app/views/Home.html',
      controller: 'HomeController'
    })
      .when('/login', {
          templateUrl: 'app/views/Login.html',
          controller: 'LoginController'
      })
      .when('/meusdados', {
        templateUrl: 'app/views/UserData.html',
        controller: 'UserDataController',
        authorize : true
    })
      .otherwise({
        redirectTo: '/home'
      });

    });


    app.config(function(socialProvider){
      socialProvider.setGoogleKey("693340193789-olh1a18b3oj5ood2upnbblunvng708jm.apps.googleusercontent.com");
  });
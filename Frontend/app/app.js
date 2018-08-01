
var app = angular.module('app',['ngStorage','ngRoute','socialLogin']);

app.config(function($routeProvider, $locationProvider) {
     // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

    .when('/dashboard', {
      templateUrl: 'app/views/Dashboard.html',
      controller: 'DashboardController',
      requireAuth: true,
      requireRegistered: true,
      
     
    })
      .when('/login', {
          templateUrl: 'app/views/Login.html',
          controller: 'LoginController'
      })

      .when('/signup', {	
        templateUrl: 'app/views/SignUp.html',	
        controller: 'SignUpController',
        requireAuth: true,
        requireNotRegistered: true
    })	
     .when('/instructions', {	
      templateUrl: 'app/views/Instructions.html',	
      controller: 'InstructionsController'	
    })
     .when('/addCourse', {	
      templateUrl: 'app/views/CadastraDisciplina.html',	
      controller: 'CadastraDisciplinaController',
      requireAuth: true,
      requireSuperUser: true	
    })
  
      .when('/userdata', {
        templateUrl: 'app/views/UserData.html',
        controller: 'UserDataController',
        requireAuth: true,
        requireRegistered:true
      
    })
      .otherwise({
        redirectTo: '/dashboard'
      });

    });


    app.config(function(socialProvider){
      socialProvider.setGoogleKey("693340193789-olh1a18b3oj5ood2upnbblunvng708jm.apps.googleusercontent.com");
  });
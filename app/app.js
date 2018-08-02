
var app = angular.module('app',['ngStorage','ngRoute','socialLogin','tld.csvDownload']);
var host = "";

app.config(function($routeProvider, $locationProvider) {
     // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

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

    .when('/matricula', {
      templateUrl: 'app/views/Matricula.html',
      controller: 'MatriculaController',
      requireAuth: true,
      requireRegistered:true
    
  })

  
  .when('/disciplinascadastradas', {
    templateUrl: 'app/views/DisciplinasCadastradas.html',
    controller: 'DisciplinasCadastradasController',
    requireAuth: true,
    requireRegistered:true,
    requireSuperUser: true

  
})
      .otherwise({
        redirectTo: '/login'
      });

    });


    app.config(function(socialProvider){
      socialProvider.setGoogleKey("693340193789-olh1a18b3oj5ood2upnbblunvng708jm.apps.googleusercontent.com");
  });
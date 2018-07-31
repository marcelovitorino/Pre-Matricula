angular.module('app')
    .controller('UserDataController',  function($rootScope, $location,AuthService)
    {
       $rootScope.activetab = $location.path();
       $rootScope.user_email = AuthService.getUserDetails().email;
       $rootScope.matricula_usuario = 11210403;
     

    
    });


angular.module('app')
    .controller('HeadController', function($rootScope, $location,AuthService,ProfileService)
    {
    
    $rootScope.activetab = $location.path();

    $rootScope.logout = function(){
        AuthService.logout();
    }
         
       
    });


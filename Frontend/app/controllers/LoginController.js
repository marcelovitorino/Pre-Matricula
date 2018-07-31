angular.module('app')
    .controller('LoginController', function($rootScope, $location,AuthService,ProfileService)
    {
        if(AuthService.isLogged()){
          $location.path("/dashboard");
        }

       $rootScope.activetab = $location.path();

       $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
        $location.path("/dashboard");
        $rootScope.$apply();
        

   });
   
    });


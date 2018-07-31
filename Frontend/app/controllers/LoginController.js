angular.module('app')
    .controller('LoginController', function($rootScope, $location,AuthService,$localStorage)
    {

      $rootScope.isCCC = $localStorage.isCCC;
      delete $localStorage.isCCC;
        if(AuthService.isLogged()){
          $location.path("/dashboard");
        }

       $rootScope.activetab = $location.path();

       $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
         if(AuthService.isRegistered()){
        $location.path("/dashboard"); }
         else{
          $location.path("/signup"); 
         }
        $rootScope.$apply();
        

   });
   
    });


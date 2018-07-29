angular.module('app')
    .controller('LoginController', function($rootScope, $location,AuthService)
    {
        if(AuthService.isLogged()){
          $location.path("/dashboard");
        }

       $rootScope.activetab = $location.path();

       $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
        AuthService.setUserDetails(userDetails);
        $rootScope.profile_image = AuthService.getUserDetails().imageUrl;
        $rootScope.nome_usuario = AuthService.getUserDetails().name;
        $rootScope.isLogged = true;
        $location.path("/dashboard");
        $rootScope.$apply();
        

   });
   
    });


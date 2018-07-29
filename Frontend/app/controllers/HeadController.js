angular.module('app')
    .controller('HeadController', function($rootScope, $location,AuthService)
    {
       $rootScope.activetab = $location.path();

       if(AuthService.isLogged()){
        $rootScope.profile_image = AuthService.getUserDetails().imageUrl;
        $rootScope.nome_usuario = AuthService.getUserDetails().name;
        $rootScope.isLogged = true;
       
    } else{
        $rootScope.profile_image = "/../../images/profile.png";
        $rootScope.nome_usuario = "Visitante";
        $rootScope.isLogged = false;
      
    }



    $rootScope.logout = function(){
        AuthService.logout();
    }
         
       $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
            AuthService.setUserDetails(userDetails);
            $rootScope.profile_image = AuthService.getUserDetails().imageUrl;
            $rootScope.nome_usuario = AuthService.getUserDetails().name;
            $rootScope.isLogged = true;
            $location.path("/dashboard");
            $rootScope.$apply();
            

       });

       $rootScope.$on('event:social-sign-out-success', function(event, logoutStatus){
        $rootScope.profile_image = "/../../images/profile.png";
        $rootScope.nome_usuario = "Visitante";
        $location.path("/login");
        $rootScope.isLogged = false;
       
        

    
       })
    });


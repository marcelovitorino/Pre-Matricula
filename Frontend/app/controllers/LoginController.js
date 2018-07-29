angular.module('app')
    .controller('LoginController', function($rootScope, $location,AuthService)
    {
       $rootScope.activetab = $location.path();

       if(AuthService.isLogged()){
        $rootScope.profile_image = AuthService.getUserDetails().imageUrl;
    } else{
        $rootScope.profile_image = "/../../images/profile.png";
    }
     
       
       $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
            $rootScope.$apply(function(){
                $rootScope.profile_image = userDetails.imageUrl;  
                $rootScope.nome = userDetails.name;
                AuthService.setUserDetails(userDetails);
              
            });
       });

       $rootScope.$on('event:social-sign-out-success', function(event, logoutStatus){
     
       })
    });


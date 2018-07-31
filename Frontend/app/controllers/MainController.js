angular.module('app')
    .controller('MainController',  function($rootScope, $location,AuthService,ProfileService)
    {
       $rootScope.activetab = $location.path();


       $rootScope.isLogged = AuthService.isLogged();

       if($rootScope.isLogged){
           ProfileService.update_user_profile();
       }
       else{
           ProfileService.update_visitant_profile();
       }
     
       $rootScope.$on('$routeChangeStart', function(angularEvent, newUrl) {
        if (newUrl.requireAuth && !AuthService.isLogged()) {
            $location.path("/login");
        }
    });

        $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
            AuthService.setUserDetails(userDetails);
            $rootScope.isLogged = true;
            ProfileService.update_user_profile();
            $rootScope.$apply();
            

       });

       $rootScope.$on('event:social-sign-out-success', function(event, logoutStatus){
        ProfileService.update_visitant_profile();
        $rootScope.isLogged = false;
        $location.path("/login");
      

    });
    });
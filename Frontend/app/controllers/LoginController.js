angular.module('app')
    .controller('LoginController',  function($rootScope, $location)
    {
       $rootScope.activetab = $location.path();
       $rootScope.profile_image = "/../../images/profile.png";

       $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
         $rootScope.profile_image = userDetails.imageUrl;  
       })

    
    });


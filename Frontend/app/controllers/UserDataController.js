angular.module('app')
    .controller('UserDataController',  function($rootScope, $location)
    {
       $rootScope.activetab = $location.path();
       $rootScope.profile_image = "/../../images/profile.png";



      
       $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
            $rootScope.$apply(function(){
                $rootScope.profile_image = userDetails.imageUrl;  
                $rootScope.nome = userDetails.name;
            });
     
       });

    
    });


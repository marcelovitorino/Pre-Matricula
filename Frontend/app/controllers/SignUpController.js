angular.module('app')
    .controller('SignUpController',  function($rootScope, $location,AuthService)
    {
       $rootScope.activetab = $location.path();

     

    });

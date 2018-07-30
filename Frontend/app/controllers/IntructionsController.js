angular.module('app')
    .controller('InstructionsController',  function($rootScope, $location,AuthService)
    {
       $rootScope.activetab = $location.path();

     
    

    });

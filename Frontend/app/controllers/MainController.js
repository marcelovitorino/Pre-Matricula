angular.module('app')
    .controller('MainController',  function($rootScope, $location,AuthService)
    {
       $rootScope.activetab = $location.path();

     
        


    });
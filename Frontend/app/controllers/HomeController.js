angular.module('app')
    .controller('HomeController',  function($rootScope, $location)
    {
       $rootScope.activetab = $location.path();
    });


angular.module('app')
    .controller('DashboardController',  function($rootScope, $location,AuthService)
    {
       $rootScope.activetab = $location.path();

      

    });


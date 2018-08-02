angular.module('app')
    .controller('HeadController', function($rootScope,$scope, $location,AuthService,ProfileService)
    {
    
    $rootScope.activetab = $location.path();
    $scope.array = ['oi','i'];


    $rootScope.logout = function(){
        AuthService.logout();
    }
         
       
    });


angular.module('app')
    .controller('MainController',  function($rootScope, $location,AuthService)
    {
       $rootScope.activetab = $location.path();

     
       $rootScope.$on('$routeChangeStart', function(angularEvent, newUrl) {
        if (newUrl.requireAuth && !AuthService.isLogged()) {
            $location.path("/login");
        }

    });
    });
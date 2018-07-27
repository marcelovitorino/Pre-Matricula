angular.module('app')
    .controller('LoginController', LoginController($rootScope, $location));


function loginController($rootScope, $location) {
        $rootScope.activetab = $location.path();
    }
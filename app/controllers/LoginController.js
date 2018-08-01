angular.module('app')
  .controller('LoginController', function ($rootScope, $location, AuthService, $localStorage,UserService) {

    $rootScope.isCCC = $localStorage.isCCC;
    delete $localStorage.isCCC;
    if (AuthService.isLogged()) {
      $location.path("/dashboard");
    }

    $rootScope.activetab = $location.path();

    $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
      if (UserService.isRegistered()) {
        $location.path("/dashboard");
      }

      else {
        $location.path("/cordinatorPanel");
      }

      $rootScope.$apply();


    });

  });


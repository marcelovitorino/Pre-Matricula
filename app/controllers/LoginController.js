angular.module('app')
  .controller('LoginController', function ($rootScope, $location, AuthService, $localStorage,UserService) {

    $rootScope.isCCC = $localStorage.isCCC;
    delete $localStorage.isCCC;
    if (AuthService.isLogged()) {
      $location.path("/matricula");
    }

    $rootScope.activetab = $location.path();

    $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
      if (UserService.isRegistered() && !UserService.isCordinator()) {
        $location.path("/matricula");
      }
      else if(!UserService.isRegistered() && !UserService.isCordinator()){
        $location.path("/signup");
      }

      else {
        $location.path("/disciplinascadastradas");
      }

      $rootScope.$apply();


    });

  });


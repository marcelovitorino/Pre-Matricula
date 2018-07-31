angular.module('app')
  .factory('AuthService', function($localStorage,socialLoginService) {
   const service = {};

   
    service.getUserDetails = function () {
      return $localStorage.UserDetails;
    },
    service.setUserDetails = function (UserDetails) {
        $localStorage.UserDetails = UserDetails;
      },
    service.signin = function (data) {
      $http.post('api/signin', data);
    },
    service.signup = function (data) {
      $http.post('api/signup', data);
    },
    service.logout = function () {
      socialLoginService.logout();
      $localStorage.$reset();
    }

    service.isCCC = function(){
      email = $localStorage.UserDetails.email.split("@");
      return email[1] == "ccc.ufcg.edu.br";

    }

    service.isLogged = function(){ return $localStorage.UserDetails !== undefined};

    return service;
  
});
angular.module('app')
  .factory('AuthService', function($localStorage,socialLoginService) {
   const service = {};

   
    service.getUserDetails = function () {
      return $localStorage.UserDetails;
    },
    service.setUserDetails = function (UserDetails) {
        $localStorage.UserDetails = UserDetails;
      },
   
    service.logout = function () {
      socialLoginService.logout();
      $localStorage.$reset();
    },

    service.isRegistered = function (){
      return true;
    }



    service.isCCC = function(){
      email = $localStorage.UserDetails.email.split("@");
      return email[1] == "ccc.ufcg.edu.br";

    }

    service.isLogged = function(){ return $localStorage.UserDetails !== undefined};

    return service;
  
});
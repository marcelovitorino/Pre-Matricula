angular.module('app')
  .factory('UserService', function($rootScope,AuthService) {
   const service = {};

  
   service.isRegistered = function (){
    return true;
  }

  service.isCordinator = function (){
    return true;
  }



  service.isCCC = function(){
    email = $localStorage.UserDetails.email.split("@");
    return email[1] == "ccc.ufcg.edu.br";

  }



    return service;
  
});
angular.module('app')
  .factory('UserService', function ($localStorage, AuthService, $http,$q) {
    const service = {};
    deferred = $q.defer();


    service.isRegistered = function () {
      $http.get('https://prematriculabackend.herokuapp.com/api/aluno/' + AuthService.getUserDetails().email).
        then(function (response) {
          deferred.resolve(response.status == 200);
        },function(response){
          deferred.resolve(response.status == 200);
   
        }).catch(function(response){deferred.resolve(response.status == 200);});

        return deferred.promise;
    }


    service.isCordinator = function () {
      return true;
      
      if (AuthService.getUserDetails() === undefined)
        return false;
      else
        return AuthService.getUserDetails().email == "projsw@ccc.ufcg.edu.br";
    }

    


    service.getEmail = function () {
     
      return AuthService.getUserDetails().email;
    
    }

    service.getName = function () {
      return AuthService.getUserDetails().name;
    }




    service.isCCC = function () {
      email = $localStorage.UserDetails.email.split("@");
      return email[1] == "ccc.ufcg.edu.br";

    }



    return service;

  });
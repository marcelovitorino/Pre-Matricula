angular.module('app')
    .controller('UserDataController',  function($scope,$rootScope, $location,AuthService)
    {

     
       $rootScope.activetab = $location.path();
       $rootScope.user_email = AuthService.getUserDetails().email;
       $scope.matricula_usuario =2 ;
  
     
       $scope.send = function send(){
           console.log($scope.matricula_usuario);
           console.log(validaMatricula($scope.matricula_usuario));
       }


       function validaMatricula(matricula){
           if (matricula.toString().length != 8) {
               return false;
       }
        else if(isNaN(matricula)) {
                return false
            }
                else return true;


       }
     

    
    });


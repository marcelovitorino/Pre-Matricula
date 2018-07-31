angular.module('app')
    .controller('UserDataController',  function($rootScope, $location,AuthService)
    {

        const vm = this;
       $rootScope.activetab = $location.path();
       $rootScope.user_email = AuthService.getUserDetails().email;
       vm.matricula_usuario = 0;
     
       $rootScope.send = function send(){
           console.log(vm.matricula_usuario);
           console.log(validaMatricula($rootScope.matricula_usuario));
       }


       function validaMatricula(matricula){
           if (matricula.toString().length != 8) {
               console.log(matricula.toString().length);
               console.log('aqui');
               return false;
       }
        else if(isNaN(matricula)) {
                return false
            }
                else return true;


       }
     

    
    });


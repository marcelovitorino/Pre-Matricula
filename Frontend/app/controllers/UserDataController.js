angular.module('app')
    .controller('UserDataController',  function($scope,$rootScope, $location,AuthService,UserService)
    {

     
       $rootScope.activetab = $location.path();
       $rootScope.user_email = AuthService.getUserDetails().email;
       $scope.matricula_usuario = UserService.getMatricula();
       $scope.curso = UserService.getCurso();
  
     
       $scope.send = function send(){
        
       }


       $scope.validaMatricula = function(){
           matricula = $scope.matricula_usuario;        
           return !isNaN(matricula);
       }
     

    
    });


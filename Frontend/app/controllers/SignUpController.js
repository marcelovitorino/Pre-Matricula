angular.module('app')
    .controller('SignUpController',  function($scope, $location,AuthService)
    {
        

        $scope.sendSignUp = function() {

             //POST
          }

            $scope.validaMatricula = function() {
                matricula = $scope.numeroMatricula;
                return !isNaN(matricula);  
            }
      

    });

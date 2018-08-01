angular.module('app')
    .controller('SignUpController',  function($scope, $location,AuthService)
    {
        $scope.numeroMatricula = "";
     

        $scope.sendSignUp = function() {

             //POST
          }

            $scope.validaMatricula = function() {
               
                return !isNaN($scope.numeroMatricula);  
            }
      

    });

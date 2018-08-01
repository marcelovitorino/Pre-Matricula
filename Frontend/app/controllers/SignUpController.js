angular.module('app')
    .controller('SignUpController',  function($scope, $location,AuthService)
    {
        

        $scope.sendSignUp = function() {
                if (!validaMatricula()) {
                    //erro
                    
                } else {
                    // POST
                }
          }

          function validaMatricula() {
            if (isNaN($scope.numeroMatricula)) {
                return false;
            }   
        }
      

    });

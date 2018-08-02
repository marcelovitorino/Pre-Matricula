angular.module('app')
    .controller('SignUpController',  function($scope, $location,UserService)
    {
        
    if(UserService.isCordinator()) $location.path('/addCourse');
        $scope.numeroMatricula = "";
     

        $scope.sendSignUp = function() {
           

            $location.path("/matricula");
             //POST
          }

            $scope.validaMatricula = function() {
               
                return !isNaN($scope.numeroMatricula);  
            }
      

    });

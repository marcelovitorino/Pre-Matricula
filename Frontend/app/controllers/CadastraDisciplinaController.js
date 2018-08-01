angular.module('app')
    .controller('CadastraDisciplinaController',  function($scope, $location,AuthService)
    {
      
            $scope.sendCourse = function() {
              //POST
            }


        $scope.validaNome = function() {
            return (!isEmpty($scope.nomeDisciplina) && isNaN($scope.nomeDisciplina));
        }

        $scope.validaCodigoDisciplina = function() {
            return (!isEmpty($scope.codigoDisciplina));
        }


        function isEmpty(string) {
            return string === "";
        }

    });
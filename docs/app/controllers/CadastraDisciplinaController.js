angular.module('app')
    .controller('CadastraDisciplinaController',  function($scope, $location,AuthService)
    {

        $scope.codigoDisciplina = "";
        $scope.nomeDisciplina = "";
      
      
            $scope.sendCourse = function() {
              
            }


        $scope.validaCadastro = function(){
            return validaNome()&&validaCodigoDisciplina();

        }


       function validaNome() {
            
            return (!isEmpty($scope.nomeDisciplina) && isNaN($scope.nomeDisciplina));
        }

       function  validaCodigoDisciplina () {
            
            return (!isEmpty($scope.codigoDisciplina));
        }


        function isEmpty(string) {
            
            return string === "";
        }

    });
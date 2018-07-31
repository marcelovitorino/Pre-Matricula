angular.module('app')
    .controller('CadastraDisciplinaController',  function($scope, $location,AuthService)
    {
      
            $scope.sendCourse = function() {
              if (!validaNome()) {
                  //erro
                  
              } else if (!validaCodigoDisciplina()){
                  // erro
              } else if (!validaCargaHoraria()) {
                  // erro
              }
              else {
                  // POST
              }
            }


        function validaNome() {
            if (isEmpty($scope.nomeDisciplina) || !isNaN($scope.nomeDisciplina)) {
                return false;
            }   
        }

        function validaCodigoDisciplina() {
            if (isEmpty($scope.codigoDisciplina)) {
                return false;
            }   
        }


        function isEmpty(string) {
            return string === "";
        }

    });
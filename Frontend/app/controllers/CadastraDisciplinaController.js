angular.module('app')
    .controller('CadastraDisciplinaController',  function($rootScope, $location,AuthService)
    {
      
            $rootScope.sendCourse = function() {
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
            if (isEmpty($rootScope.nomeDisciplina)) {
                return false;
            }   
        }

        function validaCodigoDisciplina() {
            if (isEmpty($rootScope.codigoDisciplina)) {
                return false;
            }   
        }

        function validaCargaHoraria() {
            if ($rootScope.cargaHoraria < 0) {
                return false;
            }   
        }       


        function isEmpty(string) {
            return string === "";
        }

    });
angular.module('app')
    .controller('CadastraDisciplinaController',  function($scope, $location,CourseService,$http)
    {

        $scope.codigoDisciplina = "";
        $scope.nomeDisciplina = "";
      
      
            $scope.sendCourse = function() {

                disciplina = {
                    nome: $scope.nomeDisciplina,
                    codigo: $scope.codigoDisciplina,
                    numCreditos:$scope.numCreditos,
                    cargaHoraria: $scope.cargaHoraria,
                    tipo: "obrigatorio",
                    ppc : CourseService.getTipo($scope.cursoEscolhido)
                };
    
                $http.post('http://prematriculabackend.herokuapp.com/api/disciplina', disciplina).
                    then(function (response) {
                        
                            window.alert("Disciplina adicionada com Sucesso!");
                            $location.path("/disciplinascadastradas");
                        },
                        function(){ window.alert("Falha no Cadastro da Disciplina");
                        $location.path("/addCourse");}
   
                    )
              
            }


        $scope.validaCadastro = function(){
            return validaNome();

        }


       function validaNome() {
            return isNaN($scope.nomeDisciplina);
        }

       


    });
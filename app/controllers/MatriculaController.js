angular.module('app')
  .controller('MatriculaController', function ($scope, $rootScope, $location, UserService, CourseService, $http, $window) {

    $rootScope.activetab = $location.path();
    var hasPreviousMatricula = false;


    if (UserService.isCordinator()) $location.path('/addCourse');

    $scope.isMatriculaValida = false;
    $scope.numero_creditos = 0;
    $scope.Disciplines = [];

    $scope.Disciplines_Added = [];
    getMatricula();


    CourseService.getDisciplines().then(function (value) {
      $scope.Disciplines = value;
    });

    

    $scope.search = "";
    updateCreditos();



    $scope.addDiscipline = function (discipline) {

      if (getIndexDisciplina(discipline) < 0)
        $scope.Disciplines_Added.push(discipline);
      updateCreditos();
    }

    $scope.removeDiscipline = function (discipline) {
      index = getIndexDisciplina(discipline);
      if (index >= 0) $scope.Disciplines_Added.splice(index);
      updateCreditos();
    }

    function update_matricula_valida() {
      if ($scope.numero_creditos > 24 || $scope.numero_creditos < 16)
        $scope.isMatriculaValida = false;
      else
        $scope.isMatriculaValida = true;
    }

    $scope.isAdded = function (discipline) {
  
      return checkSameDisciplina(discipline);
    }


    function getIndexDisciplina(discipline) {
      for (i = 0; i < $scope.Disciplines_Added.length; i++) {
        disciplina = $scope.Disciplines_Added[i];
        if (discipline.codigo == disciplina.codigo) return i;

      } return -1;
    }

    function checkSameDisciplina(discipline) {
  

      for (i = 0; i < $scope.Disciplines_Added.length; i++) {
        disciplina = $scope.Disciplines_Added[i];

        if (discipline.codigo == disciplina.codigo) return true;
      }

      return false;



    };

    $scope.getPpc = function (ppc) {
      return CourseService.getTipoInverter(ppc);
    }


    $scope.submitMatricula = function () {
      preMatricula =
        {
          "email": UserService.getEmail(),
          "disciplina": $scope.Disciplines_Added
        }

      if (!hasPreviousMatricula) {

        $http.post('https://prematriculabackend.herokuapp.com/api/prematricula', preMatricula).
          then(function (response) {
            if (response.status == 200) {
              $window.alert("Pré-Matricula efetuada com Sucesso!");
              hasPreviousMatricula = true;
            }
            else {
              $window.alert("Falha ao efetuar Pré-Matrícula!");
            }
          });
      }

      else {
        $http.put('https://prematriculabackend.herokuapp.com/api/prematricula/' + preMatricula.email, preMatricula).
          then(function (response) {
            if (response.status == 200) {
              $window.alert("Pré-Matricula atualizada com Sucesso!");

            }
            else {
              $window.alert("Falha ao atualizar Pré-Matrícula!");
            }
          });


      }
    }


    function getMatricula() {
      $http.get('https://prematriculabackend.herokuapp.com/api/prematricula/' + UserService.getEmail()).
        then(function (response) {

          if (response.status == 200) {
            $scope.Disciplines_Added = response.data.disciplina;
            hasPreviousMatricula = true;
            updateCreditos();
          }
          else {
            hasPreviousMatricula = false;
          }
        }, function () {
          hasPreviousMatricula = false;
        });

    }

    function updateCreditos() {
      creditos = 0;

      for (i = 0; i < $scope.Disciplines_Added.length; i++)
        creditos += $scope.Disciplines_Added[i].numCreditos;
      $scope.numero_creditos = creditos;
      update_matricula_valida();
    }
  });




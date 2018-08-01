angular.module('app')
  .controller('MatriculaController', function ($scope,$rootScope, $location, AuthService, $localStorage,UserService,CourseService) {

    $rootScope.activetab = $location.path();

    $scope.isMatriculaValida = false;
    $scope.numero_creditos = 0;
    $scope.Disciplines = CourseService.getDisciplines();
    $scope.Disciplines_Added = CourseService.getDisciplinasMatriculadas();
    $scope.search = "";
    updateCreditos();
  

    console.log( $scope.Disciplines_Added);

    $scope.addDiscipline = function(discipline){
      if(!$scope.Disciplines_Added.includes(discipline))
         $scope.Disciplines_Added.push(discipline);
         updateCreditos();
    }

    $scope.removeDiscipline = function(discipline){
     index = getIndexDisciplina(discipline);
     if(index >= 0) $scope.Disciplines_Added.splice(index);
     updateCreditos();
    }

    function update_matricula_valida(){
      if($scope.numero_creditos > 24 || $scope.numero_creditos < 12) 
      $scope.isMatriculaValida = false; 
      else 
      $scope.isMatriculaValida = true;
    }

    $scope.isAdded = function(discipline){
      return checkSameDisciplina(discipline);
    }


    function getIndexDisciplina(discipline){
      for(i = 0; i < $scope.Disciplines_Added.length; i++ ){
        disciplina = $scope.Disciplines_Added[i];
        if(discipline.codigo == disciplina.codigo) return i;

      } return -1;
    }

    function checkSameDisciplina(discipline){
      
      for(i = 0; i < $scope.Disciplines_Added.length; i++ ){
        disciplina = $scope.Disciplines_Added[i];

        console.log(discipline.codigo == disciplina.codigo);
        if(discipline.codigo == disciplina.codigo) return true;
      }

      return false;
     


    };


    $scope.submitMatricula = function(){

      preMatricula = 
      {
        "email" : UserService.getMatricula(),
          "disciplina" :  $scope.Disciplines_Added }  
    }

    function updateCreditos(){
      creditos = 0;

      for(i = 0; i < $scope.Disciplines_Added.length; i++ )
       creditos += $scope.Disciplines_Added[i].numCreditos;

       $scope.numero_creditos = creditos;
       update_matricula_valida();
      

    }
});




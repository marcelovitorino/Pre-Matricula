angular.module('app')
  .controller('MatriculaController', function ($scope,$rootScope, $location, AuthService, $localStorage,UserService,CourseService) {

    $rootScope.activetab = $location.path();

    $scope.isMatriculaValida = true;
    $scope.numero_creditos = 0;
    $scope.Disciplines = CourseService.getDisciplines();
    $scope.Disciplines_Added = [];

    $scope.addDiscipline = function(discipline){
      if(!$scope.Disciplines_Added.includes(discipline))
         $scope.Disciplines_Added.push(discipline);
         updateCreditos();
    }

    $scope.removeDiscipline = function(discipline){
     index = $scope.Disciplines_Added.indexOf(discipline);
     if(index >= 0) $scope.Disciplines_Added.splice(index);
    }

    $scope.isAdded = function(discipline){
      return $scope.Disciplines_Added.includes(discipline);
    }

    function updateCreditos(){
      creditos = 0;

      for(i = 0; i < $scope.Disciplines_Added.length; i++ )
       creditos += $scope.Disciplines_Added[i].creditos;

       if(creditos > 24) 
       $scope.isMatriculaValida = false; 
       else 
       $scope.isMatriculaValida = true;

       $scope.numero_creditos = creditos;
      

    }
});




angular.module('app')
    .controller('DisciplinasCadastradasController', function($rootScope,$scope, $location,CourseService)
    {
    
    $rootScope.activetab = $location.path();
    $scope.disciplinascadastradas = CourseService.getDisciplines();
    $scope.search = "";

    $scope.removeDisciplina = function(disicipline){
        CourseService.removeDisciplina(disicipline);
        update_disciplinas();
    }

    function update_disciplinas(){
        $scoope.disciplinascadastradas = CourseService.getDisciplines();
    }
         
       
    });

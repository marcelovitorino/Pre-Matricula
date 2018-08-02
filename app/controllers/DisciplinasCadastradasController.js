angular.module('app')
    .controller('DisciplinasCadastradasController', function ($rootScope, $scope, $location, CourseService) {


        $rootScope.activetab = $location.path();
        $scope.disciplinascadastradas = CourseService.getDisciplines();
        $scope.search = "";
        $rootScope.Disciplines = [];

        CourseService.getDisciplines().then(function (value) {
            $rootScope.Disciplines = value;

        });


        $scope.removeDisciplina = function (disicipline) {
           CourseService.removeDisciplina(disicipline);
           var  index = $rootScope.Disciplines.indexOf(disicipline);
           $rootScope.Disciplines.splice(index,1);

            

        }

     

        $scope.getPpc = function (ppc) {
            return CourseService.getTipoInverter(ppc);
        }


    });

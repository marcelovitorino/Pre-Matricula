angular.module('app')
  .factory('CourseService', function ($http, $window, $q,$rootScope) {

    const service = {};
    deferred = $q.defer();



    service.getDisciplines = function () {

      $http.get('https://prematriculabackend.herokuapp.com/api/disciplina').
        then(function (response) {
          $rootScope.Disciplines = response.data;
          deferred.resolve(response.data);
        }, function (response) {
          deferred.resolve([]);
        });

      return deferred.promise;
    }


    service.getTipo = function (tipo) {
      switch (tipo) {
        case "PPC 1999 - Curso Antigo":
          return "Antiga";
          break;
        case "PPC 08/2017 - Curso Novo":
          return "Nova";
          break;
        case "Ambos":
          return "Ambas";
          break;

      }
    }



    service.getTipoInverter = function (tipo) {
      switch (tipo) {
        case "Antiga":
          return "PPC 1999 - Curso Antigo";
          break;
        case "Nova":
          return "PPC 08/2017 - Curso Novo";
          break;
        case "Ambas":
          return "Ambos";
          break;

      }
    }


    service.removeDisciplina = function (disciplina) {
      $http.delete('https://prematriculabackend.herokuapp.com/api/disciplina/' + disciplina.codigo).
        then(function (response) {
          if (response.status == 200) {
            $window.alert("Disciplina Removida com Sucesso!");
            $location.path("/disciplinascadastradas");
      
          }

        }, function () {
          
          $window.alert("Falha ao Remover Disicplina!");
        }).catch(function (response) { deferred.resolve([]); });





    }




    return service;
  });
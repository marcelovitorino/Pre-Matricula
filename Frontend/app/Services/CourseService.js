angular.module('app')
  .factory('CourseService', function($rootScope,UserService,$http) {

    const service = {};


    service.getDisciplinasMatriculadas = function(){
      
      $http.get("/api/prematricula/" + UserService.getEmail())
      .then(function(response) {
          $scope.data = response.data;
      });

      return [];

    },

    service.getDisciplines = function(){


      return disciplinasFake();
      
   
  
  }

  function disciplinasFake(){
    disciplines = [];

    psoft = {
      nome : "psoft",
      codigo : 1234,
      numCreditos : 4,
      cargaHoraria : 30,
      ppc : "nova"
    };
   bd = {
    nome : "b1",
    codigo : 12345,
    numCreditos : 4,
    cargaHoraria : 30,
    ppc : "nova"
    };
    bd1 = {
      nome : "b2",
      codigo : 12346,
      numCreditos : 4,
      cargaHoraria : 30,
      ppc : "nova"
    };
    bd2 = {
      nome : "b3",
      codigo : 12347,
      numCreditos : 4,
      cargaHoraria : 30,
      ppc : "nova"
    };

    disciplines.push(psoft);
    disciplines.push(bd);
    disciplines.push(bd1);
    disciplines.push(bd2);

    return disciplines;

  }


      return service;});
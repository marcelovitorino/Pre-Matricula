angular.module('app')
  .factory('CourseService', function($rootScope,AuthService) {

    const service = {};

    service.getDisciplinasMatriculadas = function(){
      
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
      codigo : 1234,
      numCreditos : 4,
      cargaHoraria : 30,
      ppc : "nova"
      };
      bd1 = {
        nome : "b2",
        codigo : 1234,
        numCreditos : 4,
        cargaHoraria : 30,
        ppc : "nova"
      };

      bd2 = {
        nome : "b3",
        codigo : 1234,
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

    service.getDisciplines = function(){
      
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
      codigo : 1234,
      numCreditos : 4,
      cargaHoraria : 30,
      ppc : "nova"
      };
      bd1 = {
        nome : "b2",
        codigo : 1234,
        numCreditos : 4,
        cargaHoraria : 30,
        ppc : "nova"
      };
      bd2 = {
        nome : "b3",
        codigo : 1234,
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

    return service;


  });
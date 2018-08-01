angular.module('app')
  .factory('CourseService', function($rootScope,AuthService) {

    const service = {};

    service.getDisciplines = function(){
      
      disciplines = [];

      psoft = {
        nome : "psoft",
        codigo : 1234,
        creditos : 4,
        carga_horaria : 30,
        grade : "nova"
      };
     bd = {
        nome : "bd",
        codigo : 1234,
        creditos : 4,
        carga_horaria : 30,
        grade : "ambas"
      };
      bd1 = {
        nome : "bd1",
        codigo : 1234,
        creditos : 8,
        carga_horaria : 30,
        grade : "velha"
      };
      bd2 = {
        nome : "bd2",
        codigo : 1234,
        creditos : 10,
        carga_horaria : 30,
        grade : "nova"
      };

      disciplines.push(psoft);
      disciplines.push(bd);
      disciplines.push(bd1);
      disciplines.push(bd2);

      return disciplines;
    }

    return service;


  });
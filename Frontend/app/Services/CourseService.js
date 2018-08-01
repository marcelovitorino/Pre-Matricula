angular.module('app')
  .factory('CourseService', function($rootScope,AuthService) {

    const service = {};

    service.getDisciplines = function(){
      disciplines = {};


      psoft = {
        nome = "psoft",
        codigo = 1234,
        creditos = 4,
        carga_horaria = 30,
        grade = nova
      }
     bd = {
        nome = "bd",
        codigo = 1234,
        creditos = 4,
        carga_horaria = 30,
        grade = nova
      }
      bd1 = {
        nome = "bd1",
        codigo = 1234,
        creditos = 4,
        carga_horaria = 30,
        grade = nova
      }

      disciplines.push(psoft);
      disciplines.push(bd);
      disciplines.push(bd1);

      return disciplines;
    }


  });
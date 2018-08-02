angular.module('app')
  .factory('CourseService', function($rootScope,UserService,$http) {

    const service = {};


    service.getDisciplinasMatriculadas = function(){
      return [];
      
    
    }

    service.getDisciplines = function(){
      return [

        {nome: "PSOFT",
        codigo: 11,
        numCreditos: 10,
        ppc:"Nova"
      }



      ];
      
  




  }

  return service;
    } );
angular.module('app')
  .factory('CourseService', function($http,$q) {

    const service = {};


    service.getDisciplinasMatriculadas = function(){
      return [];
      
    
    }

    service.getDisciplines = function(){

      $http.get('http://prematriculabackend.herokuapp.com/api/disciplina').
        then(function (response) {
          deferred.resolve(response.data);
        },function(response){
          deferred.resolve([]);
   
        }).catch(function(response){deferred.resolve([]);});
      
      
       return deferred.promise;
      }


      service.getTipo = function(tipo){
        switch(tipo) {
          case "PPC 1999 - Curso Antigo":
              return "Antiga";
              break;
          case "PPC 08/2017 - Curso Novo":
              return "Nova";
              break;
          case "Ambos":
             return  "Ambas";
             break;

      }}


      
      service.getTipoInverter = function(tipo){
        switch(tipo) {
          case "Antiga":
              return "PPC 1999 - Curso Antigo";
              break;
          case "Nova":
              return "PPC 08/2017 - Curso Novo";
              break;
          case "Ambas":
             return  "Ambos";
             break;

      }}




  return service;
    } );
angular.module('app')
    .controller('HeadController', function($rootScope,$scope, $location,AuthService,$window,$http)
    {
 
   $rootScope.activetab = $location.path();
  

    $rootScope.logout = function(){
        AuthService.logout();
    }

    let alunos = [];
    let prematriculas = [];
    let result = [];


    $scope.alert = function(){
        $window.alert("O Resultado está no console!");
    }


        $http.get('https://prematriculabackend.herokuapp.com/api/aluno').
        then(function (response) {
          alunos = response.data;
          
         
        }, function (response) {
          alunos = [];
        }).then(function(){
        $http.get('https://prematriculabackend.herokuapp.com/api/prematricula').
        then(function (response) {
          prematriculas = response.data;
        
          for (i = 0; i < prematriculas.length; i++) {
            const matricula = prematriculas[i];
            const aluno = alunos.filter( k => k.email === matricula.email)[0];
            resultMatricula = {
              nome: aluno.nome,
              email: aluno.email,
              matricula: aluno.matricula,
              periodoEntrada: aluno.periodoEntrada,
              disciplinaEscolhidas: matricula.disciplina.reduce((a, e, i) => {a += e.nome + "; "; return a}, "")
          }
          result.push(resultMatricula);


          }

          console.log(result);


    
         
        }, function (response) {
          prematriculas = [];
        });
        })





           
            

             
             
        



    


         
       
    });


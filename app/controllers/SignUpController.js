angular.module('app')
    .controller('SignUpController', function ($rootScope,$scope, $location, UserService, $http) {
        deferred = $q.defer();

        $scope.numeroMatricula = "";

        if (UserService.isCordinator()) $location.path('/addCourse');
        UserService.isRegistered().then(function (value) {
            this.isRegistered = value;
            
        }).then( function(){   if(this.isRegistered)
        $location.path('/matricula')});

            
        

        $scope.sendSignUp = function () {

            usuario = {
                matricula: $scope.numeroMatricula,
                nome:  UserService.getName(),
                email: UserService.getEmail(),
                periodoEntrada: "20" + $scope.numeroMatricula.slice(1, 3) + "." + $scope.numeroMatricula.slice(3, 4),
                preMatricula: {}
            };

            $http.post('http://prematriculabackend.herokuapp.com/api/aluno', usuario).
                then(function (response) {
                    if (response.status == 200) {
                        window.alert("Cadastro efetuado com Sucesso!");
                        $location.path("/matricula");
                    }
                    else {
                        window.alert("Falha no Cadastro");
                        $location.path("/login");
                    }
                },function(){
                    window.alert("Falha no Cadastro");
                    $location.path("/login");
                }
            )
        }










        $scope.validaMatricula = function () {

            return !isNaN($scope.numeroMatricula);
        }


    });

angular.module('app')
    .controller('MainController', function ($rootScope, $location,UserService, AuthService, ProfileService, $window, $localStorage) {
        $rootScope.activetab = $location.path();


        $rootScope.isLogged = AuthService.isLogged();

        $rootScope.user_type = "cordinator";

        if ($rootScope.isLogged) {
            ProfileService.update_user_profile();
        }
        else {
            ProfileService.update_visitant_profile();
        }

        $rootScope.$on('$routeChangeStart', function (angularEvent, newUrl) {
            if (newUrl.requireAuth && !AuthService.isLogged()) {
                $location.path("/login");
            }
            else if (newUrl.requireRegistered && !UserService.isRegistered()) {
                $location.path("/signup");
            }
            else if (newUrl. requireNotRegistered && UserService.isRegistered()){
                $location.path("/dashboard");
            }

            else if (newUrl.requireSuperUser && !UserService.isCordinator()) {
                $location.path("/dashboard");
            }
        });

        $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
            AuthService.setUserDetails(userDetails);
            if (UserService.isCCC()) {
                $rootScope.isCCC = true;
                $rootScope.isLogged = true;
                ProfileService.update_user_profile();
                $rootScope.$apply();
            }

            else {
                AuthService.logout();
                $location.path("/login");
                $window.location.href = '/';
                $localStorage.isCCC = false;


            }


        });

        $rootScope.$on('event:social-sign-out-success', function (event, logoutStatus) {
            ProfileService.update_visitant_profile();
            $rootScope.isLogged = false;
            $location.path("/login");
            $window.location.href = '/';



        });
    });
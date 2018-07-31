angular.module('app')
    .controller('MainController', function ($rootScope, $location, AuthService, ProfileService, $window, $localStorage) {
        $rootScope.activetab = $location.path();


        $rootScope.isLogged = AuthService.isLogged();

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
            else if (newUrl.requireRegistered && !AuthService.isRegistered()) {
                $location.path("/signup");
            }

            else if (newUrl.requireSuperUser && !AuthService.isCordinator()) {
                $location.path("/dashboard");
            }
        });

        $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
            AuthService.setUserDetails(userDetails);
            if (AuthService.isCCC()) {
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
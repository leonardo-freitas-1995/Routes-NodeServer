(function() {
    angular
        .module('routesApp')
        .config(RouteConfig);

    // Routes authentications
    function routeRoleCheck(role){
        AuthService.$inject = ['authService'];
        function AuthService(authService){
            var authType = {
                authenticated: authService.authorizeAuthenticatedUserForRoute(),
                notAuthenticated: authService.authorizeNotAuthenticatedUserForRoute(),
                admin: authService.authorizeCurrentUserForAnyRole(['root', 'admin']),
            };
            if (!authType[role])
                return false;

            return authType[role];
        }
        return AuthService;
    }
    
    RouteConfig.$inject = ['$routeProvider'];
    function RouteConfig($routeProvider){

        // Routes
        $routeProvider
        // Welcome page
        .when('/index',{
            templateUrl: '/partials/main/index',
            controller: 'IndexController',
            controllerAs: 'vm',
            resolve: {
                auth: routeRoleCheck("notAuthenticated")
            }
        })
        // Dashboard page
        .when('/dashboard',{
            templateUrl: '/partials/main/dashboard',
            controller: 'DashboardController',
            controllerAs: 'vm',
            resolve: {
                auth: routeRoleCheck("authenticated")
            }
        })
        // Profile page
        .when('/profile',{
            templateUrl: '/partials/user/profile',
            controller: 'ProfileController',
            controllerAs: 'vm',
            resolve: {
                auth: routeRoleCheck("authenticated")
            }
        })
        // Profile page
        .when('/products',{
            templateUrl: '/partials/product/products',
            controller: 'ProductsController',
            controllerAs: 'vm',
            resolve: {
                auth: routeRoleCheck("admin")
            }
        })
        .otherwise({
            redirectTo: '/index'
        });

    }
})();

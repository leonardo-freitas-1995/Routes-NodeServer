(function() {
    angular.module('routesApp', [
        // Third-Party
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'ngMessages',
        'ngStorage',
        'md.data.table',
        'pascalprecht.translate'
    ]);

    angular
        .module('routesApp')
        .config(MainConfig)
        .run(AppRun);

    MainConfig.$inject = ['$locationProvider'];
    function MainConfig($locationProvider){
        // Setting location as HTML5
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    AppRun.$inject = ['$rootScope', '$location', 'layout'];
    function AppRun($rootScope, $location, layout) {
        $rootScope.layout = layout;

        // Sending unauthorized to home
        $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
            console.log(rejection);
            if (rejection === 'not authorized') {
                $location.path('/dashboard').search({});
            }
            else if (rejection === 'not authenticated') {
                $location.path('/index').search({});
            }
            else if (rejection === 'already authenticated') {
                $location.path('/dashboard').search({});
            }
        });
    }


})();

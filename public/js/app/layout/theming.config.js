(function() {
    angular
        .module('routesApp')
        .config(Config);
    Config.$inject = ['$mdThemingProvider'];
    function Config($mdThemingProvider) {
        $mdThemingProvider.theme('default');

        $mdThemingProvider.theme('highlight')
            .primaryPalette('blue')
            .accentPalette('cyan')
            .warnPalette('indigo')
            .backgroundPalette('grey');

        $mdThemingProvider.theme('success-toast');
        $mdThemingProvider.theme('error-toast');
        $mdThemingProvider.theme('warning-toast');
        $mdThemingProvider.theme('info-toast');

    }
})();
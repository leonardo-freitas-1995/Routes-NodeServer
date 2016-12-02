(function() {
    angular
        .module('routesApp')
        .config(TranslateConfig);
    TranslateConfig.$inject = ['$translateProvider', 'translatePTBR'];
    function TranslateConfig($translateProvider, translatePTBR) {
        $translateProvider.translations('ptbr', translatePTBR);
    }
})();

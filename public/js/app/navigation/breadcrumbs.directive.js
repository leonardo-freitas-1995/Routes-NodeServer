(function() {
    angular
        .module('routesApp')
        .directive('mdBreadcrumbs', Directive);
    Directive.$inject = [];
    function Directive() {

        var directive = {
            scope: {
                links: "=mdBreadcrumbs"
            },
            link: function(scope){
            },
            templateUrl: "/templates/navigation/breadcrumbs",
            restrict: 'A'
        };

        return directive;
    }
})();

(function () {
    angular
        .module('routesApp')
        .filter('reverse', FilterScope);

    FilterScope.$inject = [];
    function FilterScope() {
        return Filter;

        function Filter(items) {
            return items.slice().reverse();
        }
    }

})();
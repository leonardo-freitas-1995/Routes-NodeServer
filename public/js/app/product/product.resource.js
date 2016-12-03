(function() {
    angular
        .module('routesApp')
        .factory('Product', Service);
    Service.$inject = ['$resource'];
    function Service($resource) {
        var ProductResource = $resource(
            '/api/products/:search/:page',
            {},
            {}
        );

        return ProductResource;
    }
})();

(function() {
    angular
        .module('routesApp')
        .factory('productService', Service);
    Service.$inject = ['$q',  'Product'];
    function Service($q, Product) {
        
        return {
            listProducts: listProducts
        };

        function listProducts(search, page) {
            var products = new Product();

            var dfd = $q.defer();
            products.$get({search: search, page: page}).then(function(response) {
                if (response.success){
                    dfd.resolve({products: response.products, pages: response.pages});
                }
                else{
                    dfd.reject("common.connection");
                }
            }, function(reason) {
                dfd.reject("common.connection");
            });

            return dfd.promise;
        }
    }
})();

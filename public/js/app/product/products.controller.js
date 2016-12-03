(function () {
    angular
        .module('routesApp')
        .controller('ProductsController', Controller);
    Controller.$inject = ['productService', 'notifier'];
    function Controller(productService, notifier) {
        var vm = this;

        vm.productQuery = {
            loaded: false,
            loading: false,
            search: "",
            page: 1,
            pages: 0,
            products: []
        };

        vm.previousPage = function(){
            vm.productQuery.page--;
            vm.refreshProducts();
        };

        vm.nextPage = function(){
            vm.productQuery.page++;
            vm.refreshProducts();
        };

        vm.changedSearch = function(){
            vm.productQuery.page = 1;
            loadProducts();
        };

        vm.refreshProducts = function(){
            loadProducts();
        };
        
        function loadProducts(){
            vm.productQuery.loaded = false;
            vm.productQuery.loading = true;
            var query = vm.productQuery.search;
            if (query === ""){
                query = "ALL_PRODUCTS";
            }
            vm.promise = productService.listProducts(query, vm.productQuery.page).then(function(data){
                vm.productQuery.loaded = true;
                vm.productQuery.loading = false;
                vm.productQuery.products = data.products;
                vm.productQuery.pages = data.pages;
            },
            function(error){
                vm.productQuery.loaded = false;
                vm.productQuery.loading = false;
                notifier.error(error);
            }).$promise;
        }

        loadProducts();
    }
})();
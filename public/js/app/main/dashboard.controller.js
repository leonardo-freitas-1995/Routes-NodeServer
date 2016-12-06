(function () {
    angular
        .module('routesApp')
        .controller('DashboardController', Controller);
    Controller.$inject = ['taxRatesSettings', 'productService'];
    function Controller(taxRatesSettings, productService) {
        var vm = this;
        vm.fromState = "";
        vm.toState = "";
        vm.product = "";
        vm.selected = [];

        vm.productQuery = {
            loaded: false,
            loading: false,
            products: []
        };
        
        vm.search = function(){
            if (vm.product === ""){
                vm.productQuery = {
                    loaded: false,
                    loading: false,
                    products: []
                };
                return;
            }
            vm.productQuery.loaded = false;
            vm.productQuery.loading = true;
            productService.searchProducts(vm.product).then(
                function(products){
                    vm.productQuery.loaded = true;
                    vm.productQuery.loading = false;
                    vm.productQuery.products = products;
                },
                function(error){
                    vm.productQuery.loaded = false;
                    vm.productQuery.loading = false;
                });
        };
        
        vm.states = taxRatesSettings.states;
    }
})();
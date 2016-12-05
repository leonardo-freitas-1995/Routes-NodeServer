(function () {
    angular
        .module('routesApp')
        .controller('NewProductController', Controller);
    Controller.$inject = ['$mdDialog', 'notifier', 'taxRatesSettings', 'productService'];
    function Controller($mdDialog, notifier, taxRatesSettings, productService) {
        var vm = this;
        vm.name = "";
        vm.NCM = "";
        vm.taxRates = [];

        taxRatesSettings.states.forEach(function(state){
           vm.taxRates.push({
               state: state,
               taxRate: 0,
               taxSubstitution: false,
               using: false
           });
        });

        vm.toggleState = function(index, val){
            console.log(index + " -> " + val);
            vm.taxRates[index].using = val;
        };
        
        vm.openMenu = function($mdOpenMenu, $event){
            $mdOpenMenu($event);
        };

        vm.cancel = function(){
            $mdDialog.cancel();
        };

        vm.create = function(){
            if (vm.newProductForm.$pristine){
                notifier.error('index.errors.fillFields');
            }
            else if (vm.newProductForm.$valid){
                var newProduct = {
                    name: vm.name,
                    NCM: vm.NCM,
                    taxRates: vm.taxRates
                };
                productService.createProduct(newProduct).then(
                    function () {
                        notifier.success('products.newProductSuccess');
                        $mdDialog.hide();
                    },
                    function(reason){
                        notifier.error(reason);
                    }
                );
            }
        }
    }
})();
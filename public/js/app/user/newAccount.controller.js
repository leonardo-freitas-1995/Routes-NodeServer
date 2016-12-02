(function () {
    angular
        .module('routesApp')
        .controller('NewAccountController', Controller);
    Controller.$inject = ['$mdDialog', 'notifier', 'userService'];
    function Controller($mdDialog, notifier, userService) {
        var vm = this;
        vm.email = "";
        vm.name = "";
        vm.password = "";
        vm.repeatPassword = "";


        vm.cancel = function(){
            $mdDialog.cancel();
        };

        vm.create = function(){
            if (vm.newAccountForm.$pristine){
                notifier.error('index.errors.fillFields');
            }
            else if (vm.newAccountForm.$valid){
                var newAccount = {
                    name: vm.name,
                    email: vm.email,
                    password: vm.password
                };
                userService.createAccount(newAccount).then(
                    function () {
                        notifier.success('signup.success');
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
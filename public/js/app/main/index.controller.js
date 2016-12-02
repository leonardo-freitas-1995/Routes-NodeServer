(function () {
    angular
        .module('routesApp')
        .controller('IndexController', Controller);
    Controller.$inject = ['$location', '$mdDialog', 'authService', 'notifier'];
    function Controller($location, $mdDialog, authService, notifier) {
        var vm = this;
        vm.email = "";
        vm.password = "";

        vm.login = function () {
            if (vm.loginForm.$pristine){
                notifier.error('index.errors.fillFields');
            }
            else if (vm.loginForm.$valid){
                authService.authenticateUser(vm.email, vm.password).then(function (success) {
                        if (success) {
                            notifier.success('index.login.success');
                            $location.path("/dashboard");
                        } else {
                            notifier.error('index.login.error');
                        }
                    },
                    function(){
                        notifier.error('common.connectionError');
                    });
            }
        };

        vm.signup = function($event){
            $mdDialog.show({
                    attachTo: angular.element(document.body),
                    controller: 'NewAccountController',
                    controllerAs: 'dialog',
                    templateUrl: '/partials/user/newAccount',
                    parent: angular.element(document.body),
                    targetEvent: $event,
                    clickOutsideToClose: true
                })
                .then(function() {

                });
        };
    }
})();
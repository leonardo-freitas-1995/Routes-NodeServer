(function () {
    angular
        .module('routesApp')
        .controller('ProfileController', Controller);
    Controller.$inject = ['$location', 'identityService', 'userService', 'notifier'];
    function Controller($location, identityService, userService, notifier) {
        var vm = this;

        vm.profile = angular.copy(identityService.currentUser);
        delete vm.profile._id;
        delete vm.profile.roles;
        vm.profile.password = "";
        vm.profile.repeatPassword = "";

        vm.updateProfile = function(){
            var newUserData = angular.copy(vm.profile);
            if (vm.profile.password !== "" || vm.profile.repeatPassword !== ""){
                delete newUserData.repeatPassword;
            }
            else{
                delete newUserData.password;
                delete newUserData.repeatPassword;
            }
            if (vm.profileForm.$valid) {
                userService.updateCurrentUser(newUserData).then(function(){
                    $location.path("/dashboard");
                    notifier.success("profile.saveSuccess");
                },
                function(reason){
                    notifier.error(reason);
                })
            }
            
        }
    }
})();
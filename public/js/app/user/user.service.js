(function() {
    angular
        .module('routesApp')
        .factory('userService', Service);
    Service.$inject = ['$q', 'identityService',  'User'];
    function Service($q, identityService, User) {
        
        return {
            createAccount: createAccount,
            updateCurrentUser: updateCurrentUser
        };
        
        function createAccount(accountData) {
            var user = new User(accountData);

            var dfd = $q.defer();
            user.$save().then(
                function(response){
                    if (response.success){
                        dfd.resolve();
                    }
                    else{
                        dfd.reject(response.reason);
                    }
                },
                function(){
                    dfd.reject("common.connectionError");
                }
            );

            return dfd.promise;
        }

        function updateCurrentUser(newUserData) {
            var user = new User(newUserData);

            var dfd = $q.defer();
            user.$save({id: identityService.currentUser._id}).then(function(response) {
                if (response.success){
                    delete newUserData.password;
                    angular.extend(identityService.currentUser, newUserData);
                    dfd.resolve();
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

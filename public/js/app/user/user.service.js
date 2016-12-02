(function() {
    angular
        .module('routesApp')
        .factory('userService', Service);
    Service.$inject = ['$q', 'identityService',  'User'];
    function Service($q, identityService, User) {
        
        return {
            getAllUsers: getAllUsers,
            sendInvite: sendInvite,
            updateCurrentUser: updateCurrentUser,
            deleteUser: deleteUser,
            changeRoles: changeRoles,
            recoverPassword: recoverPassword,
            resetPassword: resetPassword
        };

        function getAllUsers() {
            var dfd = $q.defer();
            User.query(function(data){
                    dfd.resolve(data);
                },
                function(){
                    dfd.resolve([]);
                });
            return dfd.promise;
        }
        
        function sendInvite(email) {
            var user = new User({email: email});

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

        function deleteUser(email) {
            User.remove({email: email});
        }

        function changeRoles(email, roles){
            var user = new User({email: email, roles: roles});

            var dfd = $q.defer();
            user.$save().then(function(){
                    dfd.resolve();
                },
                function(response){
                    dfd.reject(response.data.reason);
                }
            );

            return dfd.promise;
        }

        function recoverPassword(email, language) {
            var user = new User({language: language});
            var dfd = $q.defer();

            user.$save({email: email}).then(function (response) {
                if (response.success === true){
                    dfd.resolve();
                }
                else {
                    dfd.reject(response.reason);
                }

            }, function (response) {
                if (response.success === true){
                    dfd.resolve();
                }
                else {
                    dfd.reject("common.connectionError");
                }
            });

            return dfd.promise;
        }
        
        function resetPassword(email, token, password) {
            var user = new User({password: password});
            var dfd = $q.defer();

            user.$save({email: email, token: token}).then(function (response) {
                if (response.success === true){
                    dfd.resolve();
                }
                else {
                    dfd.reject(response.reason);
                }

            }, function (response) {
                if (response.success === true){
                    dfd.resolve();
                }
                else {
                    dfd.reject("common.connectionError");
                }
            });

            return dfd.promise;
        }
    }
})();

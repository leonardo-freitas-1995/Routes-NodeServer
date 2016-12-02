(function() {
    angular
        .module('routesApp')
        .factory('authService', Service);
    Service.$inject = ['$http', '$q', 'identityService', 'User'];
    function Service($http, $q, identityService, User) {
        return {
            authenticateUser: authenticateUser,
            logoutUser: logoutUser,
            authorizeCurrentUserForRoute: authorizeCurrentUserForRoute,
            authorizeCurrentUserForAnyRole: authorizeCurrentUserForAnyRole,
            authorizeAuthenticatedUserForRoute: authorizeAuthenticatedUserForRoute,
            authorizeNotAuthenticatedUserForRoute: authorizeNotAuthenticatedUserForRoute
        };

        function authenticateUser(username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username: username, password: password}).then(function (response) {
                if (response.data.success) {
                    var user = new User();
                    angular.extend(user, response.data.user);
                    delete user.password;
                    delete user.salt;
                    identityService.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        }

        function logoutUser() {
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function () {
                identityService.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        }

        function authorizeCurrentUserForRoute(role) {
            if (identityService.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }

        }

        function authorizeCurrentUserForAnyRole(roles) {
            if (identityService.isAnyAuthorized(roles)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }

        }

        function authorizeAuthenticatedUserForRoute() {
            if (identityService.isAuthenticated()) {
                return true;
            } else {
                return $q.reject('not authenticated');
            }
        }

        function authorizeNotAuthenticatedUserForRoute() {
            if (!identityService.isAuthenticated()) {
                return true;
            } else {
                return $q.reject('already authenticated');
            }
        }
    }
})();

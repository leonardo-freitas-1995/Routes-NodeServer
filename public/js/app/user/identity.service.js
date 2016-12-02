(function() {
    angular
        .module('routesApp')
        .factory('identityService', Service);
    Service.$inject = ['$window', 'User'];
    function Service($window, User) {
        var currentUser;
        if (!!$window.bootstrappedUserObject) {
            currentUser = new User();
            angular.extend(currentUser, $window.bootstrappedUserObject);
            delete currentUser.password;
            delete currentUser.salt;
        }

        var identity = {
            currentUser: currentUser,
            isAuthenticated: function () {
                return !!this.currentUser;
            },
            isAuthorized: function (role) {
                return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
            },
            isAnyAuthorized: function(roles){
                if (!!this.currentUser){
                    for (var r = 0; r < roles.length; r++){
                        if (this.currentUser.roles.indexOf(roles[r]) !== -1)
                            return true;
                    }
                }
                return false;
            }
        };

        return identity;
    }
})();

(function() {
    angular
        .module('routesApp')
        .factory('User', Service);
    Service.$inject = ['$resource'];
    function Service($resource) {
        var UserResource = $resource(
            '/api/users/:id',
            {},
            {}
        );

        return UserResource;
    }
})();

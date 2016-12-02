(function() {
    angular
        .module('routesApp')
        .factory('notifier', Service);
    Service.$inject = ['$mdToast', 'translateFilter'];
    function Service($mdToast, translateFilter) {

        const defaultToastSettings = {
            position: "top right",
            hideDelay: 3000
        };

        return {
            success: success,
            error: error,
            warning: warning,
            info: info
        };
        
        function success(message, param, options){
            $mdToast.show(buildToast(message, param, options || {}, "success-toast"));
        }
        
        function error(message, param, options){
            $mdToast.show(buildToast(message, param, options || {}, "error-toast"));
        }
        
        function warning(message, param, options){
            $mdToast.show(buildToast(message, param, options || {}, "warning-toast"));
        }
        
        function info(message, param, options){
            $mdToast.show(buildToast(message, param, options || {}, "info-toast"));
        }

        function buildToast(message, param, options, toastTheme){
            return $mdToast.simple()
                .textContent(translateFilter(message, param))
                .position(options.position || defaultToastSettings.position)
                .hideDelay(options.hideDelay || defaultToastSettings.hideDelay)
                .theme(toastTheme);
        }
    }
})();

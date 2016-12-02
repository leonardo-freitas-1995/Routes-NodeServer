(function() {
    angular
        .module('routesApp')
        .factory('storage', Service);
    Service.$inject = ['$localStorage', '$sessionStorage', 'storageSettings'];
    function Service($localStorage, $sessionStorage, storageSettings) {

        initStorage();

        return {
            getDefaultStorage: getDefaultStorage || FallbackStorage
        };

        function getDefaultStorageType(){
            return storageSettings.default_storage;
        }

        function getDefaultStorage(){
            var storageType = getDefaultStorageType();
            if (storageType === "localStorage") {
                return $localStorage;
            }
            else if (storageType === "sessionStorage"){
                return $sessionStorage;
            }
            else {
                return FallbackStorage;
            }
        }

        function FallbackStorage(){
            return {};
        }

        function initStorage(){
            if (!getDefaultStorageType().initiated){
                getDefaultStorageType().initiated = true;
                getDefaultStorageType().languageStorage = {};
            }
        }
    }
})();

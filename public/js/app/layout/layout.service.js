(function () {
    angular
        .module('routesApp')
        .factory('layout', Service);
    Service.$inject = ['$location', '$mdMedia', '$mdSidenav', 'identityService', 'language', 'notifier', 'authService'];
    function Service($location, $mdMedia, $mdSidenav, identityService, language, notifier, authService) {

        var pages = {
            "dashboard": {name: "sidenav.dashboard", url: "/dashboard"},
            "profile": {name: "common.profile", url: "/profile"},
            "products": {name: "sidenav.products", url: "/products"},
        };
        
        var commonSidenav = [
            pages.dashboard
        ];
        
        var accessSidenavs = [
            {
                role: "admin",
                items: [
                    pages.products
                ]
            }
        ];

        var sidenavItems = [];

        var breadcrumbs = {
            "/dashboard": [
                pages.dashboard
            ],
            "/profile": [
                pages.profile
            ],
            "/products": [
                pages.products
            ]
        };

        var fullPageRoutes = [
            "/index"
        ];

        return {
            hasSidenav: hasSidenav,
            isSidenavFixed: isSidenavFixed,
            getBreadcrumbs: getBreadcrumbs,
            toggleSidenav: toggleSidenav,
            getCurrentUserInfo: getCurrentUserInfo,
            getSidenavItems: getSidenavItems,
            getAccessSidenavItems: getAccessSidenavItems,
            goTo: goTo,
            isActiveView: isActiveView,
            openMenu: openMenu,
            signout: signout,
            hasRoleAccess: hasRoleAccess
        };

        function hasSidenav(){
            return !fullPageRoutes.contains($location.path());
        }
        
        function isSidenavFixed(){
            return $mdMedia('gt-md');
        }

        function getBreadcrumbs(){
            return breadcrumbs[$location.path()];
        }

        function toggleSidenav(){
            $mdSidenav('left').toggle();
        }

        function getCurrentUserInfo(attr){
            return identityService.currentUser[attr] || null;
        }

        function getSidenavItems(){
            return commonSidenav;
        }

        function getAccessSidenavItems(){
            return accessSidenavs;
        }

        function goTo(path, params){
            $location.path(path).search(params || {});
        }

        function isActiveView(path){
            return $location.path() === path;
        }

        function openMenu($mdOpenMenu, $event){
            $mdOpenMenu($event);
        }

        function signout(){
            authService.logoutUser().then(function () {
                notifier.success('common.logoutSuccess');
                $location.path('/index');
            });
        }

        function hasRoleAccess(role){
            return identityService.isAuthorized(role) || identityService.isAuthorized("root");
        }
    }
})();
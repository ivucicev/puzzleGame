(() => {
    "use strict";
    angular.module("puzzleGame.Home", ["ngRoute"])
        .config(['$routeProvider', ($routeprovider) => {
            $routeprovider.when('/', {
                controller: 'HomeController',
                controllerAs: 'Home',
                templateUrl: 'components/Home/Views/home.html'
            });
        }]);
})();
//# sourceMappingURL=Home.js.map
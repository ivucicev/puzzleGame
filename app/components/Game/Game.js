(() => {
    "use strict";
    angular.module("puzzleGame.Game", ["ngRoute"])
        .config(['$routeProvider', ($routeprovider) => {
            $routeprovider.when('/game', {
                controller: 'GameController',
                controllerAs: 'Game',
                templateUrl: 'components/Game/Views/game.html'
            });
        }]);
})();
//# sourceMappingURL=Game.js.map
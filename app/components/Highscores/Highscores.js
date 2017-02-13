(() => {
    "use strict";
    angular.module("puzzleGame.Highscores", ["ngRoute"])
        .config(['$routeProvider', ($routeprovider) => {
            $routeprovider.when('/highscores', {
                controller: 'HighscoresController',
                controllerAs: 'High',
                templateUrl: 'components/Highscores/Views/highscores.html'
            });
        }]);
})();
//# sourceMappingURL=Highscores.js.map
(() => {
    'use strict';
    angular.module('puzzleGame', [
        'ngRoute',
        "puzzleGame.Util",
        "puzzleGame.Game",
        "puzzleGame.Highscores",
        "puzzleGame.Home",
    ]);
})();
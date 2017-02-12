(() => {
    'use strict';
    angular.module('puzzleGame', [
        'ngRoute',
        "puzzleGame.Game",
        "puzzleGame.Highscores",
        "puzzleGame.Home",
    ]);
})();
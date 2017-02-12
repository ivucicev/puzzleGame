(() => {
    'use strict';
    angular.module('puzzleGame', [
        'ngRoute',
        "puzzleGame.Game",
        'mostPopularListingsApp.home',
        'mostPopularListingsApp.about',
        'mostPopularListingsApp.login'
    ]);
})();
(() => {
    'use strict';
    angular.module('puzzleGame', [
        'ngRoute',
        'mostPopularListingsApp.home',
        'mostPopularListingsApp.about',
        'mostPopularListingsApp.login'
    ]);
})();
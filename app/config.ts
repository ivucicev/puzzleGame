
(() => {
    'use strict';
    angular.module('puzzleGame')
        .config(function($routeProvider, $locationProvider, $httpProvider) {
            $routeProvider.otherwise({ redirectTo: '/' });
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        });
})();

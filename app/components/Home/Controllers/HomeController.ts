(() => {
    "use strict";
    angular.module('puzzleGame.Home')
    .controller('HomeController', ['$location', HomeController]);
    function HomeController ($location) {
        
        var self = this;

        this.goToHighscores = () => $location.path("highscores");

        this.goToGame = () => $location.path("game");

    }
})();
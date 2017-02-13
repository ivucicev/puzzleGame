(() => {
    "use strict";
    angular.module('puzzleGame.Highscores')
    .controller('HighscoresController', ['FirebaseService', '$timeout', '$location', HighscoresController]);
    function HighscoresController (FirebaseService, $timeout, $location) {
        
        var self = this;

        this.highscores = [];

        this.init = () => {
            this.getHighscores();
        }

        // go back
        this.goToHome = () =>  $location.path("/");

        // get highscores from firebase
        this.getHighscores = () => {
            FirebaseService.getHighscores().on("value", 
            (v) => {
                v.forEach((s) => { 
                    $timeout(this.highscores.push({name: s.key, score: s.val()}));
                })
            })
        }

        // "ctor()"
        this.init();
    }
})();
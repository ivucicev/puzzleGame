(() => {
    "use strict";
    angular.module('puzzleGame.Highscores')
    .controller('HighscoresController', ['FirebaseService', '$timeout', HighscoresController]);
    function HighscoresController (FirebaseService, $timeout) {
        
        var self = this;

        this.highscores = [];

        this.init = () => {
            this.getHighscores();
        }

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
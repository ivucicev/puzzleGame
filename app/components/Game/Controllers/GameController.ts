(() => {
    "use strict";
    angular.module('puzzleGame.Game')
    .controller('GameController', ['GameService', GameController]);
    function GameController (GameService) {
        let self = this;
        this.generatedWord = {};
        this.answer = [];
        this.currentIndex = 0;
        this.currentScore = 0;
        this.init = () => {
            this.generatedWord = GameService.scrambleWord();
            this.answer = new Array(this.generatedWord.word.length);
            console.log(this.answer);
        }
        this.scrambleCurrentWord = () => {

        }
        this.handleUserInput = ($event) => {
            console.log($event.key)
        }
        this.init();
    }
})();
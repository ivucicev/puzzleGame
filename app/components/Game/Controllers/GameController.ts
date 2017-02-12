(() => {
    "use strict";
    angular.module('puzzleGame.Game')
    .controller('GameController', ['GameService', GameController]);
    function GameController (GameService) {
        let self = this;
        this.generatedWord = {};
        this.answer = [];
        this.currentIndex = 0;
        this.score = 0;
        this.init = () => {
            this.generatedWord = GameService.scrambleWord();
            this.answer = new Array(this.generatedWord.word.length);
        }
        this.scrambleCurrentWord = () => {

        }
        this.validateAnswer = () => {
            console.log(this.answer.join(''))
            if (this.generatedWord.word === this.answer.join('')) {
                this.increaseScore();
            } 
        }
        this.decreaseScore = () => {
            if (this.score > 0) this.score--;
        }
        this.increaseScore = () => {
            this.score += Math.floor(1.95 ^ (this.generatedWord.word.length / 3));
        }
        // allow only characters
        this.keyValid = (keyCode) => {
            if (keyCode >= 65 && keyCode <= 90) return true;
            return false;
        }
        this.keyBackspace = (keyCode) => {
            if (keyCode == 65 || keyCode == 37) return false;
            this.decreaseScore();
            this.answer[this.currentIndex] = undefined;
            this.currentIndex--;
        }
        this.handleUserInput = ($event) => {
            if (this.currentIndex >= this.generatedWord.word.length) {
                this.validateAnswer();
                return;
            }
            if (this.keyValid($event.keyCode)) {
                this.answer[this.currentIndex] = $event.key.toUpperCase();
                this.currentIndex++;
                if (this.currentIndex >= this.generatedWord.word.length) this.validateAnswer();
            } else if (this.keyBackspace($event.keyCode)) {

            }
        }
        this.init();
    }
})();
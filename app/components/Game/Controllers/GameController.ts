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
        this.currentScoreDecrease = 0;
        this.init = () => {
            this.nextWord();
        }
        this.nextWord = () => {
            this.currentScoreDecrease = 0;
            this.answer = [];
            this.currentIndex = 0;
            this.generatedWord = GameService.scrambleWord();
            this.answer = new Array(this.generatedWord.word.length);
        }
        this.validateAnswer = () => {
            if (this.generatedWord.word === this.answer.join('')) {
                this.nextWord();
                this.increaseScore();
            } 
        }
        this.decreaseScore = () => {
            this.currentScoreDecrease++;
        }
        this.increaseScore = () => {
            let score = Math.floor(Math.pow(1.95, (this.generatedWord.word.length / 3))) - this.currentScoreDecrease;
            this.score += score >= 0 ? score : 0;
        }
        // allow only characters
        this.keyValid = (keyCode) => {
            if (keyCode >= 65 && keyCode <= 90) return true;
            return false;
        }
        this.keyBackspace = (keyCode) => {
            if (keyCode == 8 || keyCode == 37) {
                this.decreaseScore();
                this.answer[this.currentIndex] = undefined;
                this.currentIndex--;
            }
        }
        // triggered from directive, which listens for keypress
        this.handleUserInput = ($event) => {
            if (this.keyValid($event.keyCode)) {
                this.answer[this.currentIndex] = $event.key.toUpperCase();
                this.currentIndex++;
                if (this.currentIndex >= this.generatedWord.word.length) this.validateAnswer();
            } else if (this.keyBackspace($event.keyCode)) {
                this.decreaseScore();
            }
        }
        this.init();
    }
})();
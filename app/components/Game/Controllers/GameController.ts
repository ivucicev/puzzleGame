(() => {
    "use strict";
    angular.module('puzzleGame.Game')
    .controller('GameController', ['GameService', GameController]);
    function GameController (GameService) {

        var self = this;

        this.generatedWord = {};
        this.answer = [];
        this.currentIndex = 0;
        this.score = 0;
        this.currentScoreDecrease = 0;

        this.init = () => {
            this.nextWord();
        }

        this.nextWord = () => {
            // reset
            this.currentScoreDecrease = 0;
            this.currentIndex = 0;
            GameService.getNewWord().then(v => {
                self.generatedWord.word = v.val().toUpperCase();
                self.generatedWord.scrambled = GameService.scrambleWord(self.generatedWord.word);
                self.answer = new Array(self.generatedWord.word.length);
            });
        }

        this.validateAnswer = () => {
            if (this.generatedWord.word === this.answer.join('')) {
                this.nextWord();
                this.increaseScore();
            } 
        }

        this.decreaseScore = () => {
            this.currentScoreDecrease++;
            this.currentIndex--;
            this.answer[this.currentIndex] = undefined;
        }

        this.increaseScore = () => {
            let score = Math.floor(Math.pow(1.95, (this.generatedWord.word.length / 3))) - this.currentScoreDecrease;
            this.score += score >= 0 ? score : 0;
        }

        this.timesUp = () => {
            
        }

        // allow only characters
        this.keyValid = keyCode => keyCode >= 65 && keyCode <= 90;

        // check if pressed key is backspace or left arrow
        this.keyBackspace = keyCode => keyCode == 8 || keyCode == 37;

        // triggered from directive, which listens for keypress
        this.handleUserInput = ($event) => {
            if (this.currentIndex >= this.generatedWord.word.length && !this.keyBackspace($event.keyCode)) return;
            if (this.keyValid($event.keyCode)) {
                this.answer[this.currentIndex] = $event.key.toUpperCase();
                this.currentIndex++;
                if (this.currentIndex >= this.generatedWord.word.length) this.validateAnswer();
            } else if (this.keyBackspace($event.keyCode) && this.currentIndex > 0) {
                this.decreaseScore();
            }
        }

        // "ctor()"
        this.init();

    }
})();
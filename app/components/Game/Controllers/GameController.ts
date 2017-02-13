(() => {
    "use strict";
    angular.module('puzzleGame.Game')
    .controller('GameController', ['GameService', '$location', 'FirebaseService', '$window', '$timeout', GameController]);
    function GameController (GameService, $location, FirebaseService, $window, $timeout) {

        var self = this;

        this.generatedWord = {};
        this.answer = [];
        this.currentIndex = 0;
        this.score = 0;
        this.currentScoreDecrease = 0;

        this.init = () => {
            this.nextWord();
        }

        // go back
        this.goToHome = () =>  $location.path("/");

        // reset && get next word
        this.nextWord = () => {
            this.currentScoreDecrease = 0;
            this.currentIndex = 0;
            GameService.getNewWord().then(v => {
                self.generatedWord.word = v.val().toUpperCase();
                console.log(self.generatedWord.word)
                self.generatedWord.scrambled = GameService.scrambleWord(self.generatedWord.word);
                GameService.currentWord = self.generatedWord.word;
                self.answer = new Array(self.generatedWord.word.length);
            });
        }

        // check if answer is correct
        this.validateAnswer = () => {
            if (GameService.validateWord(this.answer.join(''))) {
                this.nextWord();
                this.increaseScore();
            } 
        }

        // score penalty
        this.decreaseScore = () => {
            this.currentScoreDecrease++;
            this.currentIndex--;
            this.answer[this.currentIndex] = undefined;
        }

        // add score according to penalty
        this.increaseScore = () => {
            let score = Math.floor(Math.pow(1.95, (this.generatedWord.word.length / 3))) - this.currentScoreDecrease;
            this.score += score >= 0 ? score : 0;
        }

        // times up!
        this.timesUp = () =>  {
            if (this.score > 0) {
                let name = $window.prompt(`You scored ${this.score} points please enter your name`);
                FirebaseService.setNewHighscore(this.score, name).then(() => $timeout($location.path("highscores")));
            } else $location.path("highscores");
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
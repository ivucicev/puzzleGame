(() => {
    "use strict";
    angular.module('puzzleGame.Game')
        .controller('GameController', ['GameService', GameController]);
    function GameController(GameService) {
        let self = this;
        this.generatedWord = {};
        this.answer = [];
        this.currentIndex = 0;
        this.currentScore = 0;
        this.init = () => {
            this.generatedWord = GameService.scrambleWord();
            this.answer = new Array(this.generatedWord.word.length);
        };
        this.scrambleCurrentWord = () => {
        };
        this.handleUserInput = ($event) => {
            if (this.currentIndex >= this.generatedWord.word.length)
                return;
            console.log(this.answer);
            this.answer[this.currentIndex] = $event.key;
            this.currentIndex++;
        };
        this.init();
    }
})();
//# sourceMappingURL=GameController.js.map
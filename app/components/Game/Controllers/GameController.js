(() => {
    "use strict";
    angular.module('puzzleGame.Game')
        .controller('GameController', ['GameService', GameController]);
    function GameController(GameService) {
        let self = this;
        this.generatedWord = {};
        this.answer = [];
        this.init = () => {
            this.generatedWord = GameService.scrambleWord();
            this.answer = new Array(this.generatedWord.word.length);
            console.log(this.answer);
        };
        this.init();
    }
})();
//# sourceMappingURL=GameController.js.map
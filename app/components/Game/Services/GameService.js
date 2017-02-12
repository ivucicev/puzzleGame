(() => {
    "use strict";
    angular.module('puzzleGame.Game')
        .service('GameService', [GameService]);
    function GameService() {
        let GameService = {
            _usedWords: [],
            scrambleWord: () => {
                let word;
                console.log(GameService._usedWords);
                // avoid word repeat
                do {
                    word = TestWords[Math.round(Math.random() * (TestWords.length - 1))].toUpperCase();
                } while (GameService._usedWords.indexOf(word) > -1);
                let scrambled = word.split("");
                let l = scrambled.length;
                for (let i = l - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    let tmp = scrambled[i];
                    scrambled[i] = scrambled[j];
                    scrambled[j] = tmp;
                }
                GameService._usedWords.push(word);
                return {
                    word: word,
                    scrambled: scrambled.join("")
                };
            },
            clearUsedWords: () => GameService._usedWords = []
        };
        return GameService;
    }
})();
const TestWords = [
    "Pizza",
    "Cake",
    "Soda",
    "impostor",
    "impostors",
    "incentivization",
];
//# sourceMappingURL=GameService.js.map
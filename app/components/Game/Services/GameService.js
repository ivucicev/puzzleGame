(() => {
    "use strict";
    angular.module('puzzleGame.Game')
        .service('GameService', [GameService]);
    function GameService() {
        return {
            scrambleWord: () => {
                let word = TestWords[Math.round(Math.random() * (TestWords.length - 1))].toUpperCase();
                console.log(word);
                let scrambled = word.split("");
                let l = scrambled.length;
                for (let i = l - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    let tmp = scrambled[i];
                    scrambled[i] = scrambled[j];
                    scrambled[j] = tmp;
                }
                return {
                    word: word,
                    scrambled: scrambled.join("")
                };
            }
        };
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
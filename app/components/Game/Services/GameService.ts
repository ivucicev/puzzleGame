(() => {
    "use strict";
    angular.module('puzzleGame.Game')
    .service('GameService', ['FirebaseService', GameService]);
    function GameService (FirebaseService) {
        let GameService =  {
            _usedWordsIndexes: [],
            currentWord: "",
            scrambleWord: (word) => {
                
                let scrambled = word.split("");
                let l = scrambled.length;

                for(let i = l - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    let tmp = scrambled[i];
                    scrambled[i] = scrambled[j];
                    scrambled[j] = tmp;
                }

                return scrambled.join("");

            },
            getNewWord: () => {

                let wordCount = FirebaseService.getWordsCount();
                let word, index;

                // avoid word repeat
                do {
                    index = Math.round(Math.random() * (wordCount - 1));
                } while(GameService._usedWordsIndexes.indexOf(index) > -1);

                GameService._usedWordsIndexes.push(index);
                
                return FirebaseService.getWord(index);

            },
            
            clearUsedWords: () => GameService._usedWordsIndexes = [],
            validateWord: w => w === GameService.currentWord, 
        }
        return GameService;
    }
})();
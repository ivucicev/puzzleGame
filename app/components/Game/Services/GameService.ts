(() => {
    "use strict";
    angular.module('puzzleGame.Game')
    .service('GameService', ['FirebaseService', '$q', GameService]);
    function GameService (FirebaseService, $q) {
        let GameService =  {
            _usedWordsIndexes: [],
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

                // defer because of firebase asynchronisity
                let deferred = $q.defer();

                let wordCount = FirebaseService.getWordsCount();
                let word, index;

                // avoid word repeat
                do {
                    index = Math.round(Math.random() * (wordCount - 1));
                } while(GameService._usedWordsIndexes.indexOf(index) > -1);

                GameService._usedWordsIndexes.push(index);
                return FirebaseService.getWord(index);

            },
            clearUsedWords: () => GameService._usedWordsIndexes = []
        }
        return GameService;
    }
})();
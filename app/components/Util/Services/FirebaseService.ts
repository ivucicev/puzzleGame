declare var firebase;
(() => {
    "use strict";
    angular.module('puzzleGame.Util')
    .service('FirebaseService', ['HttpService', 'FIREBASE', FirebaseService]);
    function FirebaseService (HttpService, FIREBASE) {
        let FirebaseService =  {
            getWord: index => firebase.database().ref(`${FIREBASE.KEY_WORDS}/${index}`).once("value"),
            getWordsCount: () => FIREBASE.WORD_COUNT,
            getHighscores: () => firebase.database().ref(`${FIREBASE.KEY_HIGHSCORES}/`).orderByValue(),
            // setNewHighscore: (highscore, name) => firebase.database().ref(`highscores`).push({`${name}`: highscore})
        }
        return FirebaseService;
    }
})();
(() => {
    "use strict";
    angular.module('puzzleGame.Util')
        .factory('FirebaseService', ['HttpService', 'FIREBASE', FirebaseService]);
    function FirebaseService(HttpService, FIREBASE) {
        let FirebaseService = {
            getWord: index => firebase.database().ref(`${FIREBASE.KEY_WORDS}/${index}`).once("value"),
            getWordsCount: () => FIREBASE.WORD_COUNT,
            getHighscores: () => firebase.database().ref(`${FIREBASE.KEY_HIGHSCORES}/`).orderByChild('score'),
            setNewHighscore: (score, name) => firebase.database().ref(`highscores/`).push().set({ 'name': name, 'score': score })
        };
        return FirebaseService;
    }
})();
//# sourceMappingURL=FirebaseService.js.map
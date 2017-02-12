declare var firebase;
(() => {
    "use strict";
    angular.module('puzzleGame.Util')
    .service('FirebaseService', ['HttpService', FirebaseService]);
    function FirebaseService (HttpService) {
        let FirebaseService =  {
            getWord: index => firebase.database().ref(`words/${index}`).once("value"),
            getWordsCount: () => firebase.database().ref(`words`).once("value")
        }
        return FirebaseService;
    }
})();
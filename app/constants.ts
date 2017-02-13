(() => {
    'use strict';
    angular.module('puzzleGame')
    .constant('FIREBASE', {
        'WORD_COUNT': 3845,
        'KEY_HIGHSCORES': 'highscore',
        'KEY_WORDS': 'words'
    })
})();

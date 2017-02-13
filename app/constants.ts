(() => {
    'use strict';
    angular.module('puzzleGame')
    .constant('FIREBASE', {
        'WORD_COUNT': 3845,
        'KEY_HIGHSCORES': 'highscores',
        'KEY_WORDS': 'words'
    })
})();

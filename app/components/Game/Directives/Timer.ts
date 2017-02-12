(() => {
    "use strict";
    angular.module('puzzleGame.Game')
    .directive('timer', ['$interval', Timer]);
    function Timer ($interval) {
        return {
            restrict: 'E',
            scope: {
                date: '@'
            },
            link: (scope, element) => {
                let intvl = null;
                try {
                    let timer = 40;
                    intvl = $interval(() => {
                        element.text(--timer);
                        if (timer == 0) {
                            scope.$apply(scope.$parent.Game.timesUp());
                            $interval.cancel(intvl);
                        }
                    }, 1000);
                    scope.$on('$destroy', () => $interval.cancel(intvl))​;
                } catch(e) {
                    $interval.cancel(intvl)
                }
            }
        };
    }
})();
(() => {
    "use strict";
    angular.module('puzzleGame.Game')
        .directive('timer', ['$interval', '$timeout', Timer]);
    function Timer($interval, $timeout) {
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
                            $timeout(() => scope.$parent.Game.timesUp());
                            $interval.cancel(intvl);
                        }
                    }, 1000);
                    scope.$on('$destroy', () => $interval.cancel(intvl));
                }
                catch (e) {
                    $interval.cancel(intvl);
                }
            }
        };
    }
})();
//# sourceMappingURL=Timer.js.map
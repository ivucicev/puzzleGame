(() => {
    "use strict";
    angular.module('puzzleGame.Game')
        .directive('keypress', [Keypress]);
    function Keypress() {
        return {
            restrict: 'E',
            replace: true,
            scope: { isolateValue: "@" },
            terminal: true,
            link: function postLink(scope, iElement, iAttrs) {
                let keypresEvent = e => scope.$apply(scope.$parent.Game.handleUserInput(e));
                try {
                    document.body.addEventListener('keydown', keypresEvent);
                    scope.$on('$destroy', () => {
                        // cleanup if user goes to another view
                        document.body.removeEventListener('keydown', keypresEvent);
                    });
                }
                catch (e) {
                    // clean
                    document.body.removeEventListener('keydown', keypresEvent);
                }
            }
        };
    }
})();
//# sourceMappingURL=Keypress.js.map
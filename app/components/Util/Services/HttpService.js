(function () {
    angular.module('puzzleGame.Util')
        .factory('HttpService', ['$http', function ($http) {
            return {
                get: function (url) {
                    return $http({
                        url: url,
                        method: "GET",
                    });
                }
            };
        }]);
})();
//# sourceMappingURL=HttpService.js.map
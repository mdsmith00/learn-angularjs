weatherApp.controller('homeController', ['$scope', 'forcastService', function ($scope, forcastService) {
    "use strict";

    $scope.city = forcastService.city;

    $scope.$watch('city', function () {
        forcastService.city = $scope.city;
    });
}]);

weatherApp.controller('forcastController', ['$scope', 'forcastService', '$resource', '$routeParams', function ($scope, forcastService, $resource, $routeParams) {
    "use strict";

    $scope.city = forcastService.city;

    $scope.days = $routeParams.days || '2';

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

    /*global weatherApi*/
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, appid: "2de143494c0b295cca9337e1e96b00e0", units: "metric" });

    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function (milliseconds) {
        return new Date(milliseconds * 1000);
    };
}]);

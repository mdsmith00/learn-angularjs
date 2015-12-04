weatherApp.controller('homeController', ['$scope', 'forcastService', '$location', function ($scope, forcastService, $location) {
    "use strict";

    $scope.city = forcastService.city;

    $scope.$watch('city', function () {
        forcastService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/forcast");
    };

}]);

weatherApp.controller('forcastController', ['$scope', 'forcastService', 'weatherService', '$routeParams', function ($scope, forcastService, weatherService, $routeParams) {
    "use strict";

    $scope.city = forcastService.city;

    $scope.days = $routeParams.days || '2';


    $scope.weatherResult = weatherService.GetForcast($scope.city, $scope.days);

    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function (milliseconds) {
        return new Date(milliseconds * 1000);
    };
}]);

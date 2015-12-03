// MODULE
/*global angular*/
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
    "use strict";

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })
        .when('/forcast', {
            templateUrl: 'pages/forcast.htm',
            controller: 'forcastController'
        });
});

// SERVICES
weatherApp.service('forcastService', function () {
    "use strict";

    // Default to New York
    this.city = 'New York, NY';
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'forcastService', function ($scope, forcastService) {
    "use strict";

    $scope.city = forcastService.city;

    $scope.$watch('city', function () {
        forcastService.city = $scope.city;
    });
}]);

weatherApp.controller('forcastController', ['$scope', 'forcastService', function ($scope, forcastService) {
    "use strict";

    $scope.city = forcastService.city;
}]);

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

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', function ($scope) {
    "use strict";

}]);

weatherApp.controller('forcastController', ['$scope', function ($scope) {
    "use strict";

}]);

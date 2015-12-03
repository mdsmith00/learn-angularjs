/*global angular*/
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    "use strict";
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        // Pattern matching on :num
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/third', {
            templateUrl: 'pages/third.html',
            controller: 'thirdController'
        });

});

myApp.directive('searchResult', function () {

    "use strict";

    return {
        // HTML template, replace the directive element. Restrict this directive so it can only be used as an element
        restrict: 'E',
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">55 Main Street, New York, NY 11111</p></a>',
        replace: true
    }
});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    "use strict";

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

    "use strict";
}]);

myApp.controller('thirdController', ['$scope', '$log', function ($scope, $log) {

    "use strict";

}]);

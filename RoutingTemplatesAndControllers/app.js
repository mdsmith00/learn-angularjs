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
    
        .when('/third', {
            templateUrl: 'pages/third.html',
            controller: 'thirdController'
        });

});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    
    "use strict";
    $scope.name = 'Main';

}]);

myApp.controller('secondController', ['$scope', '$log', function ($scope, $log) {
    
    "use strict";
    $scope.name = 'Second';

}]);

myApp.controller('thirdController', ['$scope', '$log', function ($scope, $log) {
    
    "use strict";
    $scope.name = 'Third';

}]);
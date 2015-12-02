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

myApp.service('nameService', function () {

    "use strict";

    var self = this;

    this.name = 'John Doe';
    this.namelength = function () {
        return self.name.length;
    };
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

    "use strict";
    $scope.name = nameService.name;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

    "use strict";
    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });

}]);

myApp.controller('thirdController', ['$scope', '$log', function ($scope, $log) {

    "use strict";
    $scope.name = 'Third';

}]);

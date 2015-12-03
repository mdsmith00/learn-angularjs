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

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    "use strict";

    $scope.people = [
    {
        name: 'John Doe',
        address: '55 Main Street.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    },
    {
        name: 'Jane Doe',
        address: '333 Second Street.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
    },
    {
        name: 'George Doe',
        address: '111 Third Street.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
    }];

    $scope.formattedAddress = function (person) {
        return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

    "use strict";
}]);

myApp.controller('thirdController', ['$scope', '$log', function ($scope, $log) {

    "use strict";

}]);

// Directive declaration
myApp.directive('searchResult', function () {

    "use strict";

    return {
        // HTML template, replace the directive element. Restrict this directive so it can only be used as an element
        restrict: 'E',
        templateUrl: 'directives/searchResult.html',
        replace: true,
        scope: {
            // Isolates the scope for preventing accidental or undesired modification to $scope
            // The & tells us that this is a function
            personObject: "=",
            formattedAddressFunction: "&"
        }
    };
});

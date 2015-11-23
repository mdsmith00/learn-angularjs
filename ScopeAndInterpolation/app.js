// Angular module
var myApp = angular.module('myApplication', []);

// Controller for view - Minification safe dependency injection
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'Matt';
    
    // After 3 seconds angularjs will update the html from 'Matt' to 'Everybody'
    $timeout(function() {
       $scope.name = 'Everybody'; 
    }, 3000);
    
}]);
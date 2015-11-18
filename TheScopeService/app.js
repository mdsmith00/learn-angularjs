// Angular module
var myApp = angular.module('myApplication', []);

// Controller for view
myApp.controller('mainController', function($scope) {
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    $scope.getName = function() {
        return 'John Doe';
    }
    
    $scope.getName();
    
    console.log($scope);
});
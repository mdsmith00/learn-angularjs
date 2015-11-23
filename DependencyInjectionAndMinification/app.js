// Angular module
var myApp = angular.module('myApplication', []);

// Controller for view - Minification safe dependency injection
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $log.info($scope);    
    
}]);
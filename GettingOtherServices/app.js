// Angular module - [] contains the list of module dependencies
var myApp = angular.module('myApplication', ['ngMessages','ngResource']);

// Controller for view
myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    $log.log("Hello.");
    $log.info("This is some information.");
    $log.warn("This is a warning!");
    $log.debug("This is a debug statement.");
    $log.error("This is an error!!!");
    
    $scope.name = 'John';
    
    // Use the filter service to uppercase the name
    // https://docs.angularjs.org/api/ng/filter
    $scope.formattedName = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedName);
});
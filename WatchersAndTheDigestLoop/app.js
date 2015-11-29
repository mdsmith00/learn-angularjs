var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.handle = '';
    $scope.lowercaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.$watch('handle', function(newValue, oldValue) {
        console.info('Changed!');
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);
    });
    
    // Native javascript setTimeout. Not within the AngularJS context
    setTimeout(function() {
        
        // Apply whatever occurs within the apply function to the angularJS context, this ensures the
        // AngularJS digest cycle is triggered
        $scope.$apply(function() {
            $scope.handle = 'newtwitterhandler';
            console.log('Scope Changed!');   
        });
    }, 3000);
    
    // AngularJS service which does the same thing but you dont need to apply to the angularJS context
    $timeout(function(){
        $scope.handle = 'anothernewtwitterhandler';
        console.log('Scope Changed!');  
    }, 6000);
    
}]);

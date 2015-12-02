var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    
    // GET example
    $http.get('/api')
        .success(function(result) {
        $scope.rules = result;
    })
    .error(function (data, status) {
        console.log(data);
    });
    
    $scope.newRule = '';
    
    //POST example
    $http.post('/api', { newRule: $scope.newRule })
    .success(function() {
        $scope.rules = result;
        $scope.newRule = '';
    })
    .error(function(data, status) {
        console.log(data);
    });
        
}]);

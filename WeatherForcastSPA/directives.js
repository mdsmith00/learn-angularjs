weatherApp.directive('weatherResult', function () {
    "use strict";

    return {
        // HTML template, replace the directive element. Restrict this directive so it can only be used as an element
        restrict: 'E',
        templateUrl: 'directives/weatherResult.htm',
        replace: true,
        scope: {
            weatherResultObject: "=",
            convertToDate: "&",
            dateFormat: "@"
        }
    };
});

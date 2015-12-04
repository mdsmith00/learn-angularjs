// SERVICES
weatherApp.service('forcastService', function () {
    "use strict";

    // Default to New York
    this.city = 'New York, NY';
});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetForcast = function (city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });
        return weatherAPI.get({
            q: city,
            cnt: days,
            appid: "2de143494c0b295cca9337e1e96b00e0",
            units: "metric"
        });
    }

}]);

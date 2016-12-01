angular.module('example').controller('ExampleController', ['$scope', '$routeParams', '$location', 'Data', '$http', function($scope, $location, $routeParams, Data, $http) {
    $scope.name = $routeParams.text
    $scope.derror = false;

    //Save data in DB
    $scope.done = function() {

        $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + $scope.enterCity + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
            .then(function(response) {
                console.log(response.data.query.count);

                if (response.data.query.count >= 1) {
                    $scope.derror = false;
                    var long = response.data.query.results.channel.item.long;
                    var lat = response.data.query.results.channel.item.lat;
                    var temp = response.data.query.results.channel.item.condition.temp;


                    var data = new Data({
                        name: $scope.enterName,
                        data: $scope.enterText,
                        city: $scope.enterCity,
                        long: long,
                        lat: lat,
                        temp: temp,
                    });

                    data.$save(function(resp, headers) {
                        $scope.show = Data.query();
                        console.log(resp);
                    }, function(errorResponse) {
                        $scope.derror = true;
                        $scope.error = errorResponse.data.message;

                    });
                } else {
                    $scope.derror = true;
                    $scope.error = "There was an error with your city: " + $scope.enterCity;
                }
            });

    };

    //Show list 
    $scope.show = Data.query();
    console.log(Data.query());

}]);
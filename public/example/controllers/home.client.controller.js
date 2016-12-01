angular.module('example').controller('ExampleController', ['$scope', '$routeParams', '$location', 'Data', function($scope, $location, $routeParams, Data) {
    $scope.name = $routeParams.text

    //Save data in DB
    $scope.done = function() {
        var data = new Data({
            name: this.enterName,
            data: this.enterText,
        });

        data.$save(function(resp, headers) {
            $scope.show = Data.query();
            console.log(resp);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });

    };

    //Show list 
    $scope.show = Data.query();
    console.log(Data.query());


}]);
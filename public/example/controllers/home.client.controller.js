angular.module('example').controller('ExampleController', ['$scope', '$routeParams', '$location', 'Data', function($scope, $location, $routeParams, Data) {
    $scope.name = $routeParams.text

    $scope.done = function() {
        // $location.path('api/' + $scope.enterText);
        //$scope.show = $scope.enterText;

        var data = new Data({
            data: this.enterText,
        });

        data.$save(function(response) {
            $location.path('api/' + response.data);
        }, function(errorResponse) {
            $scope.error = "chale";
            //$scope.error = errorResponse.data.message;
        });
    };



    /*  $scope.mark.$done(function() {
          $location.path('marks/' + $scope.mark.course._id);
      }, function(errorResponse) {
          $scope.error = errorResponse.data.message;
      });*/


}]);
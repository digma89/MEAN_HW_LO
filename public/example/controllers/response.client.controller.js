angular.module('example').controller('ResponseController', ['$scope', '$routeParams', '$location', 'Data', 'Response', function($scope, $location, $routeParams, Data, Response) {

    $scope.dInserted = false;
    //Save data in DB

    $scope.doneResponse = function() {
        console.log($scope.enterText);
        if ($scope.enterText == "" || $scope.enterText == null) {
            $scope.dInserted = false;
        } else {
            $scope.dInserted = true;
            var respons = new Response({
                respons: this.enterText,
                mess: $location.id,
            });
            respons.$save(function(resp, headers) {}, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
            $scope.enterText = "";
        }
    };
}]);
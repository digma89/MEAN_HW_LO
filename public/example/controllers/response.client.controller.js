angular.module('example').controller('ResponseController', ['$scope', '$routeParams', '$location', 'Data', 'Response', function($scope, $location, $routeParams, Data, Response) {

    $scope.dInserted = false;
    //Save data in DB
    $scope.done = function() {
        $scope.dInserted = true;
        var respons = new Response({
            respons: this.enterText,
        });
        respons.$save(function(resp, headers) {}, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });

    };



}]);
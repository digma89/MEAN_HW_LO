angular.module('example').factory('Data', ['$resource', function($resource) {
    return $resource('/:text', {
        text: '@_text'
    });
}]);
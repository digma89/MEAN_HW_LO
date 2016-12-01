angular.module('example').factory('Data', ['$resource', function($resource) {
    return $resource('/api:text', {
        text: '@_text'
    });
}]);
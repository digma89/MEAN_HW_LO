angular.module('example').factory('Data', ['$resource', function($resource) {
    return $resource('/api:text', {
        text: '@_text'
    });
}]);

angular.module('example').factory('Response', ['$resource', function($resource) {
    return $resource('/api/response/:id', {
        id: '@_id'
    });
}]);
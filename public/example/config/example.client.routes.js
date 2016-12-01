angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/example/views/partials/home.client.view.html',

        }).when('/api', {
            templateUrl: '/example/views/partials/home.client.view.html',
            controller: 'ResponseController'

        }).when('/api/response/:id', {
            templateUrl: '/example/views/partials/response.client.view.html',
            controller: 'ResponseController'


        });
        /*.when('/api', {
            templateUrl: '/example/views/partials/home.client.view.html',

        })
        /*otherwise({
             redirecTo: '/'
         });*/

    }


]);
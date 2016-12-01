angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/example/views/partials/home.client.view.html',

        });
        /*.when('/api/:text', {
            templateUrl: '/example/views/partials/home.client.view.html',

        }).when('/api', {
            templateUrl: '/example/views/partials/home.client.view.html',

        })
        /*otherwise({
             redirecTo: '/'
         });*/
    }
]);
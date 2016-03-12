var app = angular.module('app', ['ngRoute', 'ngMap']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/stories',
            {
                controller: 'SimpleController',
                templateUrl: 'partials/view1.html'
            })
        .when('/',
            {
                controller: 'StoryController',
                templateUrl: 'partials/stories.html',
                controllerAs: 'stories'
            })
        .when('/login',
            {
                controller: 'LoginController',
                templateUrl: 'partials/login.html',
                controllerAs: 'logins'
            })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

})
.constant('API', { // here I also can declare constants
    'key'   : "Ox5+5Ow9950Q0LhUaGUvfcKEvCU8YKUcZCGej3DxszQkGEzSJ1Kv/ORDfaRekgFsboa2j4XkmkXIkuRPOwOV/Q==", // bad practice!? Key on client....
    'url'   : "http://api.ruby_api.dev/", // base url
    'format': 'application/json' // Default representation we want
});


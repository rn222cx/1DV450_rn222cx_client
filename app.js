var app = angular.module('app', ['ngRoute', 'ngMap', 'ngFlash']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'StoryController',
                templateUrl: 'partials/stories.html',
                controllerAs: 'stories'
            })
        .when('/profile',
            {
                controller: 'CreatorController',
                templateUrl: 'partials/creator-profile.html',
                controllerAs: 'creator'
            })
        .when('/users/:id',
            {
                template: '<show-creator></show-creator>',
            })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

})
.constant('API', { // here I also can declare constants
    'key'   : "Ox5+5Ow9950Q0LhUaGUvfcKEvCU8YKUcZCGej3DxszQkGEzSJ1Kv/ORDfaRekgFsboa2j4XkmkXIkuRPOwOV/Q==", // bad practice!? Key on client....
    'url'   : "http://api.ruby_api.dev/", // base url
    'format': 'application/json' // Default representation we want
});


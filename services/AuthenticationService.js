app.factory('AuthenticationService', AuthenticationService);

AuthenticationService.$inject = ['ResourceService', '$q', '$rootScope'];

function AuthenticationService(ResourceService, $q, $rootScope) {

    var story = ResourceService('token');


    return {
        auth: function (data) {
            var deferred = $q.defer();
            // Encode users credential with base64
            var encodedCredentials = btoa(data.email+':'+data.password);
            var credential = 'Basic ' + encodedCredentials

            story.save('token', data, credential).then(function (data) {
                deferred.resolve(data);
                //$rootScope.authToken = 'Token token=' + data.token;

                sessionStorage.user = data.data.token;
            });

            return deferred.promise;
        }
    };
}
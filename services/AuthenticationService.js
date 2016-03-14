app.factory('AuthenticationService', AuthenticationService);

AuthenticationService.$inject = ['ResourceService', '$q'];

function AuthenticationService(ResourceService, $q) {

    var story = ResourceService('token');


    return {
        auth: function (data) {
            var deferred = $q.defer();
            // Encode users credential with base64
            var encodedCredentials = btoa(data.email+':'+data.password);
            var credential = 'Basic ' + encodedCredentials

            story.save('token', data, credential).then(function (data) {
                deferred.resolve(data);

                sessionStorage.isLoggedIn = true;
                sessionStorage.token = data.data.token;
                sessionStorage.user = data.data.username;
            });

            return deferred.promise;
        }
    };
}
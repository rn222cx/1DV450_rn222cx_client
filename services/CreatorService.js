app.factory('CreatorService', CreatorService);

CreatorService.$inject = ['ResourceService', '$q'];

function CreatorService(ResourceService, $q) {

    var creator = ResourceService('users/' + sessionStorage.user);


    return {
        getCreator: function () {

            var deferred = $q.defer();
            creator.getSingle().then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        }

    };
}
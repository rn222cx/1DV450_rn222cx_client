app.factory('CreatorService', CreatorService);

CreatorService.$inject = ['ResourceService', '$q'];

function CreatorService(ResourceService, $q) {

    var creator = ResourceService('users/');


    return {
        getCreator: function (id) {

            var deferred = $q.defer();
            creator.getSingle(id).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        }

    };
}
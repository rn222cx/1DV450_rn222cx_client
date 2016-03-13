app.factory('CreatorService', CreatorService);

CreatorService.$inject = ['ResourceService', '$q', '$routeParams'];

function CreatorService(ResourceService, $q, $routeParams) {

    var creator = ResourceService('users/' + $routeParams.id);


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
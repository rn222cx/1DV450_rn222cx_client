app.factory('ResourceService', ResourceService);

ResourceService.$inject = ['$http', 'API'];

function ResourceService($http, API){

    return function (collectionName){

        var Resource = function(data){
            angular.extend(this, data);
        };

        Resource.getCollection = function(data){
            // if there is no data present set it to null instead of undifined
            data = typeof data !== 'undefined' ? data : '';

            var request = {
                method: 'GET',
                url: API.url + collectionName,
                headers: {
                    'Api-Key': API.key
                },
                params: {
                    'search': data.searches,
                    'limit':  data.limit,
                    'offset': data.offset,
                    'tag':    data.tag,
                    'location': data.location
                }

            };

            return $http(request).then(function(response) {
                var result = [];

                angular.forEach(response.data, function(value, key) {
                    console.log(value);
                    result[key] = new Resource(value);
                });

                return result;
            });


        };

        Resource.getSingle = function() {

            var request = {
                method: 'GET',
                url: API.url + collectionName,
                headers: {
                    'Api-Key': API.key
                }
            };

            return $http(request).success(function(response) {
                return response;
            });
        };

        Resource.save = function(collectionName, data, authToken){
            var request = {
                method: 'POST',
                url: API.url + collectionName,
                headers: {
                    'Api-Key': API.key,
                    'Authorization': authToken,
                    'Accept': API.format,
                },
                data: data
            };
            return $http(request).then(function(response) {
                return new Resource(response);
            });

        };

        return Resource;
    }
}
app.factory('StoryService', StoryService);

StoryService.$inject = ['ResourceService', '$q'];

function StoryService(ResourceService, $q) {

    var story = ResourceService('stories/');


    return {
        get: function () {
            var deferred = $q.defer();
            story.getCollection().then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        },

        searchStories: function (data) {

            var deferred = $q.defer();
            story.getCollection(data).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        },

        saveStory: function (data) {
            var deferred = $q.defer();
            // Get auth token from session storage
            var authToken = 'Token token=' + sessionStorage.token;

            // if tags are present
            if(data.tags){
                var cleanTags = data.tags.replace(/\s+/g, ''); // Remove whitespace from tags
                var tags = cleanTags.split(",");

                var tagsArr = [];

                tags.forEach(function(entry) {
                    tagsArr.push({"name": entry});
                });
            }

            data = {
                "story": {
                    "title": data.title,
                    "description": data.description,
                    "address":data.address,
                    "longitude": data.longitude,
                    "latitude": data.latitude,
                    "tags":tagsArr
                }
            };

            story.save(data, authToken).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        },

        removeStory: function (data) {
            var deferred = $q.defer();
            // Get auth token from session storage
            var authToken = 'Token token=' + sessionStorage.token;

            story.remove(data, authToken).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        },

        updateStory: function (data) {
            var deferred = $q.defer();
            // Get auth token from session storage
            var authToken = 'Token token=' + sessionStorage.token;
            var storyID = data.id
            // if tags are present
            if(data.name){
                var cleanTags = data.name.replace(/\s+/g, ''); // Remove whitespace from tags
                var tags = cleanTags.split(",");

                var tagsArr = [];

                tags.forEach(function(entry) {
                    tagsArr.push({"name": entry});
                });
            }

            data = {
                "story": {
                    "title": data.title,
                    "description": data.description,
                    "address":data.address,
                    "longitude": data.longitude,
                    "latitude": data.latitude,
                    "tags":tagsArr
                }
            };

            story.update(data, storyID, authToken).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        }

    };
}
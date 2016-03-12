app.service('story', function story($http, $q, API, $rootScope){

    var story = this;
    story.storyList = {};

    story.getAllStories = function(){
        var defer = $q.defer();

        $http.get(API.url + 'stories')
            .success(function(response){
                story.taskList = response;
                defer.resolve(response)
            })
            .error(function(error, status){
                defer.reject(error);
            })

        return defer.promise;
    }

    story.createStory = function(story){
        var defer = $q.defer();

        $http.post(API.url + 'stories', story)
            .success(function(response){
                story.taskList = response;
                defer.resolve(response)
            })
            .error(function(error, status){
                defer.reject(error);
            })

        return defer.promise;
    }

    story.deleteStory = function(id){
        var defer = $q.defer();

        $http.post(API.url + 'stories', story)
            .success(function(response){
                story.taskList = response;
                defer.resolve(response)
            })
            .error(function(error, status){
                defer.reject(error);
            })

        return defer.promise;
    }
    return story;

});
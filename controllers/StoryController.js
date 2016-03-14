app.controller('StoryController', StoryController);

StoryController.$inject = ['StoryService', '$scope'];

function StoryController(storyService, $scope){

    var vm = this;
    var storyPromise = storyService.get();

    storyPromise
        .then(function(data){
            vm.storyList = data;
        })
        .catch(function(error){
            vm.storyList = error;
            console.log("ERROR");
        });

    vm.searchStories = function(data) {
        storyService.searchStories(data)
            .then(function(newData){
                vm.storyList = newData;
            })
            .catch(function(error){
                vm.storyList = error;
                console.log("ERROR");
            });
    };

    vm.createStory = function(data) {
        storyService.saveStory(data)
            .then(function(newData){
                vm.storyList.unshift(newData.config.data.story);
            })
            .catch(function(error){
                console.log(error)
            });
    };

    $scope.removeStory = function(id, index) {
        storyService.removeStory(id.id)
            .then(function(newData){
                $scope.creatorList.stories.splice(index, 1);
            })
            .catch(function(error){
                console.log(error)
            });
    };

    $scope.enableEditor = function(index) {
        $scope.editorEnabled = true;
    };

    $scope.disableEditor = function() {
        $scope.editorEnabled = false;
    };

    $scope.save = function(data) {
        storyService.updateStory(data)
            .then(function(newData){
                console.log(newData);
            })
            .catch(function(error){
                console.log(error)
            });

        $scope.disableEditor();
    };
}




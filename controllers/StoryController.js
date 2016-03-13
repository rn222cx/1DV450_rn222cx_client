app.controller('StoryController', StoryController);

StoryController.$inject = ['StoryService'];

function StoryController(storyService){

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

}




app.controller('StoryController', StoryController);

StoryController.$inject = ['StoryService', '$scope', '$q'];

function StoryController(storyService, $scope, $q){

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




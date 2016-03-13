app.controller('CreatorController', CreatorController);

CreatorController.$inject = ['CreatorService'];

function CreatorController(creatorService){

    var vm = this;
    var userPromise = creatorService.getCreator();

    userPromise
        .then(function(data){
            vm.creatorList = data.data;
        })
        .catch(function(error){
            vm.message = error;
            console.log("ERROR");
        });

}




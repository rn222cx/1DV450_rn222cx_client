app.controller('CreatorController', CreatorController);

CreatorController.$inject = ['CreatorService', '$routeParams', 'Flash'];

function CreatorController(creatorService, $routeParams, Flash){

    var vm = this;
    var userPromise = creatorService.getCreator($routeParams.id);

    userPromise
        .then(function(data){
            vm.creatorDetails = data.data;
        })
        .catch(function(){
            var message = '<strong> Ohps!</strong> Could not find user.';
            Flash.create('danger', message, 5000, true);
        });

}




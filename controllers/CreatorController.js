app.controller('CreatorController', CreatorController);

CreatorController.$inject = ['CreatorService', '$routeParams', 'Flash'];

function CreatorController(creatorService, $routeParams, Flash){

    var vm = this;
    var userPromise = creatorService.getCreator(sessionStorage.user);

    userPromise
        .then(function(data){
            if(!data) // if no data from api is fetched
            {
                var message = '<strong> Oh no!</strong> Could not get data from server.';
                Flash.create('danger', message, 0, true);
            }
            vm.creatorList = data.data;
        });

}




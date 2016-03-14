app.controller('CreatorController', CreatorController);

CreatorController.$inject = ['CreatorService', '$scope'];

function CreatorController(creatorService, $scope){


    var userPromise = creatorService.getCreator();

    userPromise
        .then(function(data){
            $scope.creatorList = data.data;

        })
        .catch(function(error){
            $scope.message = error;
            console.log("ERROR");
        });




}




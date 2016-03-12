app.factory('SimpleFactory', function() {
    var people = [
        {city:'växjö', name:'roy'},
        {city:'seaTown', name:'seaBoy'},
        {city:'seaVile', name:'dBoy'}
    ];

    var factory = {};
    factory.getPeople = function () {
        return people
    };
    factory.postPeople = function (people) {

    };

    return factory;
});


app.controller('SimpleController', function($scope, SimpleFactory){
    $scope.people = [];

    init();

    function init() {
        $scope.people = SimpleFactory.getPeople();
    }

    $scope.addPeople = function() {
        $scope.people.push({
            city: $scope.newPeople.city,
            name: $scope.newPeople.name

        });

    };
});
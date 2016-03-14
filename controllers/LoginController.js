app.controller('LoginController', LoginController);

LoginController.$inject = ['AuthenticationService', '$scope'];

function LoginController(authService, $scope){

    $scope.login = function(credentials) {
        authService.auth(credentials).then(function() {

        });
    };

    $scope.logout = function() {
        delete sessionStorage.clear();
    };

    $scope.isUserLoggedIn = function() {
        if(sessionStorage.user){
            return true
        }
        return false;
    };

    $scope.getCreator = function() {
        if(sessionStorage.user){
            alert(sessionStorage.user);
            return sessionStorage.user;
        }
    };


}



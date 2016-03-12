app.controller('LoginController', LoginController);

LoginController.$inject = ['AuthenticationService'];

function LoginController(authService){

    var vm = this;

    vm.login = function(credentials) {
        authService.auth(credentials).then(function() {
            console.log('inloggad');
        });
    };

    vm.logout = function() {
        console.log('utloggad');
        delete sessionStorage.user;
    };

}



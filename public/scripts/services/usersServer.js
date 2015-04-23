var app = angular.module("App"); 
// let's create a re-usable factory that generates the $firebaseAuth instance 

app.factory('usersServer', ['$state',

	function($state) {
		
		var users = new Firebase("https://pitoco.firebaseio.com");
		
		return {
		    	
		    	autentificar: function(email,password,redirect){

					users.authWithPassword({
								email    : email,
								password : password
						}, function(error, authData) {
							if (error) {
								console.log("Login Failed!", error);
							} else {
								console.log("Authenticated successfully with payload:", authData);
								$state.go(redirect);
							}

						}
					);			
		    	}
  			};
	} 
]);
 
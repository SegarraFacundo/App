var app = angular.module("App"); 
// let's create a re-usable factory that generates the $firebaseAuth instance 

app.factory('usersServer', ["$firebaseAuth",

	function($firebaseAuth) {
		
		var ref = new Firebase("https://pitoco.firebaseio.com");
		return $firebaseAuth(ref);
	} 
]);
 
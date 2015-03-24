var app = angular.module("App", ["firebase"]); 
// let's create a re-usable factory that generates the $firebaseAuth instance 

app.factory("usersServer", ["$firebaseAuth",

	function($firebaseAuth) {
		
		var ref = new Firebase("https://docs-sandbox.firebaseio.com");
		return $firebaseAuth(ref);
	} 
]);
 
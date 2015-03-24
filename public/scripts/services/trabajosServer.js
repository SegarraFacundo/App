angular.module('App')

	.factory("trabajosServer", ["$firebaseArray",
  		
  		function($firebaseArray) {
    	// create a reference to the Firebase where we will store our data

    var ref = new Firebase("https://pitoco.firebaseio.com/trabajos");

    var trabajos = $firebaseArray(ref);
    // this uses AngularFire to create the synchronized array
    return trabajos;
  }
]);
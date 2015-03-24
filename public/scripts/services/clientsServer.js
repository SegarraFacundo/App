angular.module('App')

	.factory("clientsServer", ["$firebaseObject",
  		
  		function($firebaseObject) {
    	// create a reference to the Firebase where we will store our data

    var ref = new Firebase("https://pitoco.firebaseio.com/clientes");

    var clientes = $firebaseObject(ref);
    // this uses AngularFire to create the synchronized array
    return clientes;
  }
]);
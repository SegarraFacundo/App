angular.module('App')

	.factory("clientesServer", ["$firebaseArray",
  		
  		function($firebaseArray) {
    	// create a reference to the Firebase where we will store our data

    var ref = new Firebase("https://pitoco.firebaseio.com/clientes");

    var clientes = $firebaseArray(ref);
    // this uses AngularFire to create the synchronized array
    return clientes;
  }
]);
angular.module('App')

	.factory("clientesServer", ["$firebaseArray",
  		
  		function($firebaseArray) {
    	// create a reference to the Firebase where we will store our data

		    var ref = new Firebase("https://pitoco.firebaseio.com/clientes");

		    var Clientes = $firebaseArray(ref);

		    var lengthClientes = function(){
		    	return Clientes.$getIndex().length;
		    }
		    // this uses AngularFire to create the synchronized array
		    return {
		    	
		    	list: function(){
		    		console.log("Referencia a la DB");
		    		return Clientes
		    	},

		    	saveCliente: function(cliente){
		    		
		    		Clientes.$add(cliente).then(function(ref) {
							var id = ref.key();
							console.log("Agregando cliente, id: " + id);
							Clientes.$indexFor(id); // returns location in the array
					})	
		    	},

		    	updateCliente: function(cliente){

		    		Clientes.$save(cliente).then(function(ref) {
					  ref.key() === cliente.$id; // true
					  console.log("Update cliente, id: " + cliente.$id);
					})
		    	}, 

		    	deleteCliente: function(cliente){
		    		Clientes.$remove(cliente).then(function(ref) {
  						console.log("Delete cliente, id: " + cliente.$id);
  						ref.key() === cliente.$id; // true

					})
		    	}
  			};
  		}
]);
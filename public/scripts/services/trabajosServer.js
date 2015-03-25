angular.module('App')

	.factory("trabajosServer", ["$firebaseArray",
  		
  		function($firebaseArray) {
    	// create a reference to the Firebase where we will store our data

		    var ref = new Firebase("https://pitoco.firebaseio.com/trabajos");

		    var Trabajos = $firebaseArray(ref);

		    var lengthTrabajos = function(){
		    	return Trabajos.$getIndex().length;
		    }
		    // this uses AngularFire to create the synchronized array
		    return {
		    	
		    	list: function(){
		    		console.log("Referencia a la DB");
		    		return Trabajos
		    	},

		    	saveTrabajo: function(trabajo){
		    		
		    		Trabajos.$add(trabajo).then(function(ref) {
							var id = ref.key();
							console.log("Agregando trabajo, id: " + id);
							Trabajos.$indexFor(id); // returns location in the array
					})	
		    	},

		    	updateTrabajo: function(trabajo){

		    		Trabajos.$save(trabajo).then(function(ref) {
					  ref.key() === trabajo.$id; // true
					  console.log("Update trabajo, id: " + trabajo.$id);
					})
		    	}, 

		    	deleteTrabajo: function(trabajo){
		    		Trabajos.$remove(trabajo).then(function(ref) {
  						console.log("Delete trabajo, id: " + trabajo.$id);
  						ref.key() === trabajo.$id; // true

					})
		    	}
  			};
  		}
]);
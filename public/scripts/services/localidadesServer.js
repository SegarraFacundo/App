var app = angular.module("App"); 
// let's create a re-usable factory that generates the $firebaseAuth instance 

app.factory('localidadesServer', ['$firebaseArray',

	function($firebaseArray) {
		
		var ref = new Firebase("https://pitoco.firebaseio.com/tools/provincias");
		var Provincias = $firebaseArray(ref);
		return {
		    	
		    	listProvincias: function(){
		    		console.log("Referencia a la DB");
		    		return Provincias;
		    	},

		    	saveProvincia: function(provincia){
		    		
		    		Provincias.$add(provincia).then(function(ref) {
							var id = ref.key();
							console.log("Agregando provincia, id: " + id);
							Provincias.$indexFor(id); // returns location in the array
					})	
		    	},

		    	updateProvincia: function(provincia){

		    		Provincias.$save(provincia).then(function(ref) {
					  ref.key() === provincia.$id; // true
					  console.log("Update provincia, id: " + provincia.$id);
					})
		    	}, 

		    	deleteProvincia: function(provincia){
		    		Provincias.$remove(provincia).then(function(ref) {
  						console.log("Delete provincia, id: " + provincia.$id);
  						ref.key() === provincia.$id; // true

					})
		    	}
  			};
	} 
]);
 
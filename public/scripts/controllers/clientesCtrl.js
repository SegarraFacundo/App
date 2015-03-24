angular.module('App')
	.controller(	
		'clientesCtrl',['$scope','clientesServer',
	
		function($scope, clientesServer){
			
			
			$scope.clientes = clientesServer;

			$scope.addCliente = function() {
      			// calling $add on a synchronized array is like Array.push(),
      			// except that it saves the changes to Firebase!
			    $scope.clientes.$add({
			    	nombre: $scope.nombre,
			        apellido: $scope.apellido
			    });

			    // reset the message input
			    $scope.nombre = "";
			    $scope.apellido = "";
    		}
	
		}

	]);
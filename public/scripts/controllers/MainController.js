angular.module('App',['ui.router', 'firebase'])
	.controller(	
		'MainController',['clientsServer',
	
		function($scope, clientsServer){
			
			
			$scope.clientes = clientsServer;

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

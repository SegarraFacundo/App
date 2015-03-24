angular.module('App')
	.controller(	
		'clientesCtrl',['$scope','clientesServer',
	
		function($scope, clientesServer){
			
			
			$scope.clientes = clientesServer;

			$scope.addCliente = function() {
      			// calling $add on a synchronized array is like Array.push(),
      			// except that it saves the changes to Firebase!
			    $scope.clientes.$add({
			    	apellido: $scope.apellido,
			        nombre: $scope.nombre,
			        cuit: $scope.cuit,
			        iva: $scope.iva,
			        direccion: $scope.direccion,
			        localidad: $scope.localidad,
			        provincia: $scope.provincia,
			        telefono: $scope.telefono,
			        email: $scope.email,
			        ingresoBrutos: $scope.ingresoBrutos,
			        inicioActividad: $scope.inicioActividad,
			        cpa: $scope.cpa

			    });

			    // reset the message input
			    $scope.apellido = "";
			    $scope.nombre = "";
			    $scope.cuit = "";
			    $scope.iva = "";
			    $scope.direccion = "";
			    $scope.localidad = "";
			    $scope.provincia = "";
			    $scope.telefono = "";
			    $scope.email = "";
			    $scope.ingresoBrutos = "";
			    $scope.inicioActividad = "";
			    $scope.cpa = "";
    		}
	
		}

	]);
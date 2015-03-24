angular.module('App')
	.controller(	
		'trabajosCtrl',['$scope','trabajosServer',
	
		function($scope, trabajosServer){
			
			
			$scope.trabajos = trabajosServer;

			$scope.addTrabajo = function() {
      			// calling $add on a synchronized array is like Array.push(),
      			// except that it saves the changes to Firebase!
			    $scope.trabajos.$add({
			    	tipoComprobante: $scope.tipoComprobante,
			        cuit: $scope.cuit
			    });

			    // reset the message input
			    $scope.tipoComprobante = "";
			    $scope.cuit = "";
    		}
	
		}

	]);
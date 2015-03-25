angular.module('App')
	.controller(	
		'clientesCtrl',['$scope','clientesServer',
	
		function($scope, Clientes){
			
			
			$scope.clientes = Clientes.list();

			$scope.addCliente = function() {
				Clientes.saveCliente($scope.cliente);
				$scope.cliente = {};
    		}
	
			$scope.deleteCliente = function(cliente){
				Clientes.deleteCliente(cliente);
			}

			$scope.editarCliente = function(cliente){
				$scope.cliente = cliente;
			}

			$scope.updateCliente = function(cliente){
				Clientes.updateCliente(cliente);
				$scope.cliente = {};
			}			

		}

	]);
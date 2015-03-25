angular.module('App')
	.controller(	
		'clientesCtrl',['$scope','clientesServer',
	
		function($scope, Clientes){
			
			$scope.clearCliente = function(){
				$scope.cliente = {};
			}

			$scope.clientes = Clientes.list();

			$scope.addCliente = function() {
				if($scope.nuevo){
					$scope.cliente.fechaCreacion = Date();
					Clientes.saveCliente($scope.cliente);
				}else{
					$scope.cliente.fechaUpdate = Date();
					Clientes.updateCliente($scope.cliente)
				}
				$scope.clearCliente();
    		}

    		$scope.detalleCliente = function(cliente){
    			$scope.cliente = cliente;
    		}
	
			$scope.deleteCliente = function(){
				Clientes.deleteCliente($scope.cliente);
				$scope.clearCliente();
			}

			$scope.modalCliente = function(limpio){
				if(limpio){
					$scope.clearCliente();
				}
				$scope.nuevo = limpio;
				
				$('.modal').modal('show');
			};			

		}

	]);
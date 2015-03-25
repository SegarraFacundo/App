angular.module('App')
	.controller(	
		'trabajosCtrl',['$scope','trabajosServer',
	
		function($scope, Trabajos){
			
			$scope.clearTrabajo = function(){
				$scope.trabajo = {};
			}

			$scope.trabajos = Trabajos.list();

			$scope.addTrabajo = function() {
				if($scope.nuevo){
					$scope.trabajo.fechaCreacion = Date();
					Trabajos.saveTrabajo($scope.trabajo);
				}else{
					$scope.trabajos.fechaUpdate = Date();
					Trabajos.updateCliente($scope.cliente)
				}
				$scope.clearTrabajo();
    		}

    		$scope.detalleTrabajo = function(trabajo){
    			$scope.trabajo = trabajo;
    		}
	
			$scope.deleteTrabajo = function(){
				Trabajos.deleteTrabajo($scope.trabajo);
				$scope.clearTrabajo();
			}

			$scope.modalTrabajo = function(limpio){
				if(limpio){
					$scope.clearTrabajo();
				}
				$scope.nuevo = limpio;
				
				$('.modal').modal('show');
			};			

		}

	]);
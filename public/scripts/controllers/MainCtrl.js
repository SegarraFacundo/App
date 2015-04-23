angular.module('App',['ui.router', 'firebase'])
	.controller(	
		'MainCtrl',['$scope','clientesServer','localidadesServer',
	
		function($scope, clientesServer,localidadesServer){			
			
			$scope.clientes = clientesServer;
			$scope.provincias = localidadesServer;
			
			$scope.closeSesion = function(){
				$state.go('login');
			}

	
		}

	]);

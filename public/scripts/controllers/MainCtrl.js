angular.module('App',['ui.router', 'firebase'])
	.controller(	
		'MainCtrl',['$scope','clientesServer','trabajosServer',
	
		function($scope, clientesServer, trabajosServer){			
			
			$scope.clientes = clientesServer;
			$scope.trabajos = trabajosServer;
	
		}

	]);

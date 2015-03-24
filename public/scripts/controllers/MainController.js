angular.module('App',['ui.router', 'firebase'])
	.controller(	
		'MainController',['clientsServer',
	
		function($scope, clientsServer){
			
			
			$scope.clientes = clientsServer;
			
		}
	]);

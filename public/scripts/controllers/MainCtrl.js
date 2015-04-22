angular.module('App',['ui.router', 'firebase'])
	.controller(	
		'MainCtrl',['$scope','clientesServer',
	
		function($scope, clientesServer){			
			
			$scope.clientes = clientesServer;
			
			$scope.closeSesion = function(){
				$state.go('login');
			}

	
		}

	]);

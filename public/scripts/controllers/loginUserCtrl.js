angular.module('App')
	.controller(	
		'loginUserCtrl',['$scope', '$state','usersServer',
	
		function($scope, $state, usersServer){
			
			$scope.SignIn = function() {

				usersServer.autentificar($scope.user.email,$scope.user.password,'viewClient');

			}	
		
		}

	]);

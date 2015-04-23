angular.module('App')
	.controller(	
		'loginUserCtrl',['$scope','usersServer',
	
		function($scope, usersServer){

			$scope.register = function () {

			  	usersServer.autentificar($scope.user.email,$scope.user.password,'viewClient');

			};

		}

	]);

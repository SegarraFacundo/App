angular.module('App')
	.controller(	
		'usersCtrl',['$scope', 'usersServer',
	
		function($scope, usersServer){
			
			$scope.createUser = function() {
				$scope.message = null;
				$scope.error = null;
				usersServer.$createUser({ 
					email: $scope.email, 
					password: $scope.password
				}).then(function(userData) {
					$scope.message = "User created with uid: " + userData.uid;
				}).catch(function(error) { 
					$scope.error = error; 
				});
			}; 
			$scope.removeUser = function() {
				$scope.message = null;
				$scope.error = null;
				usersServer.$removeUser({
					email: $scope.email,
					password: $scope.password
				}).then(function() {
					$scope.message = "User removed";
				}).catch(function(error) {
					$scope.error = error;
				});
			};
	
		}

	]);
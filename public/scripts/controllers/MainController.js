angular.module('App',['ui.router', 'firebase'])
	.controller(	
		'MainController',['clientsServer',"usersServer",
	
		function($scope, clientsServer,usersServer){
			
			
			$scope.clientes = clientsServer;

			$scope.addCliente = function() {
      			// calling $add on a synchronized array is like Array.push(),
      			// except that it saves the changes to Firebase!
			    $scope.clientes.$add({
			    	nombre: $scope.nombre,
			        apellido: $scope.apellido
			    });

			    // reset the message input
			    $scope.nombre = "";
			    $scope.apellido = "";
    		}
			
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

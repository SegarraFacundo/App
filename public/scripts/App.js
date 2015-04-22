angular.module('App')

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/",
      templateUrl: "partials/loginUser.html",
      controller:'loginUserCtrl',
      authenticate: false
    })
    .state('viewClient', {
      url: "/clientes",
      templateUrl: "partials/clientes.html",
      controller:'clientesCtrl',
      authenticate: true
    })
    .state('viewClient.new', {
      url: "/clientes.new",
      templateUrl: "partials/cliente-new.html",
      controller:'newClienteCtrl',
      authenticate: true
    })

    
});
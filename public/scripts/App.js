angular.module('App')

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/clientes");
  //
  // Now set up the states
  $stateProvider
    .state('viewWork', {
      url: "/trabajos",
      templateUrl: "partials/trabajos.html",
      controller:'trabajosCtrl'
    })
    .state('viewClient', {
      url: "/clientes",
      templateUrl: "partials/clientes.html",
      controller:'clientesCtrl'
    })
    
});
angular.module('App')

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/trabajos/nuevo");
  //
  // Now set up the states
  $stateProvider
    .state('viewWork', {
      url: "/trabajos",
      templateUrl: "partials/trabajos.html"
    })
    .state('viewWork.list', {
      url: "/nuevo",
      templateUrl: "partials/trabajo-new.html",
    })
    .state('viewClient', {
      url: "/clientes",
      templateUrl: "partials/clientes.html"
    })
    .state('viewClient.list', {
      url: "/nuevo",
      templateUrl: "partials/cliente-new.html",
    });
});
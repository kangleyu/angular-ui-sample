angular.module('bootstrap.module', [])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('bootstrap', {
    url: '/bootstrap',
    templateUrl: "bootstrap/bootstrap.html"
  })
  .state('bootstrap.accordion', {
    url: '/accordion',
    templateUrl: "bootstrap/templates/accordion.html",
    controller: "AccordionCtrl"
  })
  .state('bootstrap.alert', {
    url: '/alert',
    templateUrl: "bootstrap/templates/alert.html",
    controller: "AlertCtrl"
  })
})
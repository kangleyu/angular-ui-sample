angular.module('mainModule', [
  'ui.router',
  'ui.bootstrap',
  'uirouter.module',
  'bootstrap.module'
]).config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});
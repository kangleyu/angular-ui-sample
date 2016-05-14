angular.module('uirouter.module', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  //
  // now setup the states
  $stateProvider
  .state("uirouter", {
    url:'/uirouter',
    templateUrl: "/uirouter/uirouter.html"
  })
  .state('uirouter.state1', {
    url: '/state1',
    templateUrl: "uirouter/templates/state1.html"
  })
  .state('uirouter.state1.list', {
    url: "/list",
    templateUrl: "uirouter/templates/state1.list.html",
    controller: function ($scope) {
      $scope.items = ["A", "List", "Of", "Items"];
    }
  })
  .state('uirouter.state2', {
    url: "/state2",
    templateUrl: "uirouter/templates/state2.html"
  })
  .state('uirouter.state2.list', {
    url: "/list",
    templateUrl: "uirouter/templates/state2.list.html",
    controller: function($scope) {
      $scope.things = ["A", "List", "Of", "Items"];
    }
  });
});
angular.module('bootstrap.module')
// Accordion Demo Controller
.controller('AccordionCtrl', ['$scope', function ($scope) {
  $scope.onAtATime = true;
  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
  
  $scope.items = ["Item 1", "Item 2", "Item 3"];
  
  $scope.addItem = function () {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
  
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  }
}])
// Alert Demo Controller
.controller('AlertCtrl', ['$scope', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting agin.'},
    { type: 'success', msg: 'Well done! you successfully read this important alert message.'},
  ];
  
  $scope.addAlert = function () {
    $scope.alerts.push({msg: "Another Alert!"});
  };
  
  $scope.closeAlert = function (index) {
    $scope.alerts.splice(index, 1);
  }
}]);
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
}])
// Buttons demo Controller
.controller('ButtonsCtrl', ['$scope', function($scope) {
  $scope.signleModel = 1;
  
  $scope.radioModel = 'Middle';
  
  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
  
  $scope.checkResults = [];
  
  $scope.$watchCollection('checkModel', function () {
    angular.forEach($scope.checkModel, function (value, key) {
      if (value) {
        $scope.checkResults.push(key);
      }
    })
  })
}])
// Carousel Demo Controller
.controller('CarouselCtrl', ['$scope', function($scope){
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  
  $scope.addSlide = function () {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/300',
      text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
      id: currIndex++
    });
  };
  
  $scope.randomize = function () {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };
  
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }
  
  // Radomize logic below
  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  };
  
  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  };
  
  // http://stackoverflow.com/questions/962820#962890
  function shuffle(array) {
    var tmp, current, top = array.length;
    
    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }
    return array;
  };
}])
// Collapse Demo Controller
.controller('CollapseCtrl', [ '$scope', function($scope) {
  $scope.isCollapsed = false;
}])
// Dateparser Demo Controller
.controller('DateparserCtrl', [ '$scope', function($scope, uiDateParser) {
  $scope.format = "yyyy/MM/dd";
  $scope.date = new Date();
}])
.controller('DatepickerCtrl', [ '$scope', function($scope) {
  $scope.today = function () {
    $scope.dt = new Date();
  };
  $scope.today();
  
  $scope.clear = function () {
    $scope.dt = null;
  };
  
  $scope.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };
  
  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  }
  
  // Disable weekend selection
  function disabled(data) {
    var date = data.date, mode = data.mode;
    return mode == 'day' && (date.getDay() === 0 || date.getDay() === 6);
  };
  
  $scope.toggleMin = function () {
    $scope.options.minDate = $scope.options.minDate ? null : new Date();
  };
  
  $scope.toggleMin();
  
  $scope.open1 = function () {
    $scope.popup1.opened = true;
  };
  
  $scope.open2 = function () {
    $scope.popup2.opened = true;
  };
  
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];
  
  $scope.popup1 = {
    opened: false
  };
  
  $scope.popup2 = {
    opened: false
  }
  
  $scope.setDate = function (year, month, day) {
    $scope.dt = new Date(year, month, day);
  };
  
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];
  
  function getDayClass(data) {
    var date = data.date, mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).getHours(0, 0, 0, 0);
      
      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);
        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }
    return '';
  };
}])
.controller('DropdownCtrl', [ '$scope', '$log', function($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you',
    'but wait! A third!'
  ];
  
  $scope.status = {
    isopen: false
  };
  $scope.toggled = function (open) {
    $log.log('Dropdown is now: ', open);
  };
  
  $scope.toggleDropdown = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
  
  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
}])
.controller('ModalCtrl', [ '$scope', '$uibModal', '$log', function($scope, $uibModal, $log) {
  $scope.items = ["item1", "item2", "item3"];
  $scope.animationsEnabled = true;
  $scope.open = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function() {
          return $scope.items;
        }
      }
    });
    
    modalInstance.result.then(function(selectedItem) {
      $scope.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}])
.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'items', function($scope, $uibModalInstance, items){
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };
  
  $scope.ok = function() {
    $uibModalInstance.close($scope.selected.item);
  };
  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  }
}])
.controller('PagerCtrl', [ '$scope', function($scope) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;
}])
.controller('PaginationCtrl', [ '$scope', '$log', function($scope, $log) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;
  
  $scope.setPage = function(pageNo) {
    $scope.currentPage = pageNo;
  };
  
  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };
  
  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
}])
.controller('PopoverCtrl', [ '$scope', '$sce', function($scope, $sce) {
  $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'popoverTemplate.html',
    title: 'Title'
  };
  
  $scope.placement = {
    options: [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom'
    ],
    selected: 'top'
  };
  
  $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');
}])
.controller('PositionCtrl', [ '$scope', function($scope) {
  
}])
.controller('ProgressbarCtrl', [ '$scope', function($scope) {
  
}])
.controller('RatingCtrl', [ '$scope', function($scope) {
  
}])
.controller('TabsCtrl', [ '$scope', function($scope) {
  
}])
.controller('TimepickerCtrl', [ '$scope', function($scope) {
  
}])
.controller('TooltipCtrl', [ '$scope', function($scope) {
  
}])
.controller('TypeaheadCtrl', [ '$scope', function($scope) {
  
}]);

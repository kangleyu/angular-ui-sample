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
  .state('bootstrap.buttons', {
    url: '/buttons',
    templateUrl: "bootstrap/templates/buttons.html",
    controller: "ButtonsCtrl"
  })
  .state('bootstrap.carousel', {
    url: '/carousel',
    templateUrl: "bootstrap/templates/carousel.html",
    controller: "CarouselCtrl"
  })
  .state('bootstrap.collapse', {
    url: '/collapse',
    templateUrl: "bootstrap/templates/collapse.html",
    controller: "CollapseCtrl"
  })
  .state('bootstrap.dateparser', {
    url: '/dateparser',
    templateUrl: "bootstrap/templates/dateparser.html",
    controller: "DateparserCtrl"
  })
  .state('bootstrap.datepicker', {
    url: '/datepicker',
    templateUrl: "bootstrap/templates/datepicker.html",
    controller: "DatepickerCtrl"
  })
  .state('bootstrap.dropdown', {
    url: '/dropdown',
    templateUrl: "bootstrap/templates/dropdown.html",
    controller: "DropdownCtrl"
  })
  .state('bootstrap.modal', {
    url: '/modal',
    templateUrl: "bootstrap/templates/modal.html",
    controller: "ModalCtrl"
  })
  .state('bootstrap.pager', {
    url: '/pager',
    templateUrl: "bootstrap/templates/pager.html",
    controller: "PagerCtrl"
  })
  .state('bootstrap.pagination', {
    url: '/pagination',
    templateUrl: "bootstrap/templates/pagination.html",
    controller: "PaginationCtrl"
  })
  .state('bootstrap.popover', {
    url: '/popover',
    templateUrl: "bootstrap/templates/popover.html",
    controller: "PopoverCtrl"
  })
  .state('bootstrap.position', {
    url: '/position',
    templateUrl: "bootstrap/templates/position.html",
    controller: "PositionCtrl"
  })
  .state('bootstrap.progressbar', {
    url: '/progressbar',
    templateUrl: "bootstrap/templates/progressbar.html",
    controller: "ProgressbarCtrl"
  })
  .state('bootstrap.rating', {
    url: '/rating',
    templateUrl: "bootstrap/templates/rating.html",
    controller: "RatingCtrl"
  })
  .state('bootstrap.tabs', {
    url: '/tabs',
    templateUrl: "bootstrap/templates/tabs.html",
    controller: "TabsCtrl"
  })
  .state('bootstrap.timepicker', {
    url: '/timepicker',
    templateUrl: "bootstrap/templates/timepicker.html",
    controller: "TimepickerCtrl"
  })
  .state('bootstrap.tooltip', {
    url: '/tooltip',
    templateUrl: "bootstrap/templates/tooltip.html",
    controller: "TooltipCtrl"
  })
  .state('bootstrap.typeahead', {
    url: '/typeahead',
    templateUrl: "bootstrap/templates/typeahead.html",
    controller: "TypeaheadCtrl"
  });
});
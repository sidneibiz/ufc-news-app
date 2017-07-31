angular.module('ufcNewsApp')
  .controller('EventsController', [
    '$rootScope',
    '$window',
    '$state',
    'ufcService',
    EventsController
  ]);

function EventsController($rootScope, $window, $state, ufcService) {
  const vm = this;

  vm.$onInit = function () {
    $rootScope.$broadcast("events");
    vm.events = [];
    ufcService.getEvents().then(res => vm.events = res.data);
  }

  vm.viewDetail = function (item) {
    vm.primary = item;
    vm.event_date = new moment(item.event_date).format('LLL');
    $window.scrollTo(0, 0);
  };

  vm.tickets = function (item) {
    $state.go('tickets', {
      id: item.id
    });
  }
}
angular.module('ufcNewsApp')
  .controller('EventsController', [
    '$scope',
    'ufcService',
    EventsController
  ]);

function EventsController($scope, ufcService) {
  const vm = this;

  vm.$onInit = function () {
    vm.events = [];
    ufcService.getEvents().then(res => {
      vm.events = res.data;
    });
  }

  vm.viewDetail = function (item) {
    console.log('videDetail');
  };
}
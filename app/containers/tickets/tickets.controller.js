angular.module('ufcNewsApp')
  .controller('TicketsController', [
    '$stateParams',
    '$sce',
    '$rootScope',
    'ufcService',
    TicketsController
  ]);

function TicketsController($stateParams, $sce, $rootScope, ufcService) {
  const vm = this;

  vm.$onInit = function () {
    $rootScope.$broadcast("tickets");
    if ($stateParams.id) {
      ufcService.getTicketForEvent($stateParams.id).then(res => {
        vm.ticket = $sce.trustAsHtml(res.data);
      });
    }
  }
}
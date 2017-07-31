angular.module('ufcNewsApp')
  .controller('FighterDetailController', [
    '$stateParams',
    '$sce',
    'ufcService',
    FighterDetailController
  ]);

function FighterDetailController($stateParams, $sce, ufcService) {
  const vm = this;

  vm.$onInit = function () {
    ufcService.getFighters($stateParams.id).then(res => {
      vm.fighter = $sce.trustAsHtml(res.data);
    });
  }
}
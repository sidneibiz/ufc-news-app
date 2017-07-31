angular.module('ufcNewsApp')
  .controller('FightersController', [
    '$state',
    '$rootScope',
    'ufcService',
    FightersController
  ]);

function FightersController($state, $rootScope, ufcService) {
  const vm = this;

  vm.$onInit = function () {
    $rootScope.$broadcast("fighters");
    vm.fighters = [];
    vm.search = {};
    ufcService.getFighters().then(res => {
      vm.fighters = res.data;
      vm.class = vm.fighters.reduce((types, classe) => types.includes(classe.weight_class) ? types : types.push(classe.weight_class) && types, []).sort();
    });
  }

  vm.viewDetail = function (item) {
    $state.go('fighters-detail', {
      id: item.id
    });
  };
}
angular.module('ufcNewsApp')
  .controller('FightersController', [
    '$scope',
    'ufcService',
    FightersController
  ]);

function FightersController($scope, ufcService) {
  const vm = this;

  vm.$onInit = function () {
    vm.fighters = [];
    vm.search = {};
    ufcService.getFighters().then(res => {
      vm.fighters = res.data;
      vm.class = vm.fighters.reduce((types, classe) => types.includes(classe.weight_class) ? types : types.push(classe.weight_class) && types, []).sort();
    });
  }

  vm.viewDetail = function (item) {
    console.log('videDetail');
  };
}
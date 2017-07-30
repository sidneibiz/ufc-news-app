angular.module('ufc-news-app')
  .controller('fightersController', [
    '$scope',
    'ufcService',
    FightersController
  ]);

function FightersController($scope, ufcService) {
  const vm = this;

  vm.fighters = [];

  ufcService.get('fighters').then(res => vm.fighters = res.data);
}
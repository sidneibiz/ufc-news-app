angular.module('ufcNewsApp')
  .controller('HomeController', [
    '$scope',
    'ufcService',
    HomeController
  ]);

function HomeController($scope, ufcService) {
  const vm = this;

  vm.news = [];

  ufcService.get('news').then(res => vm.news = res.data);
}
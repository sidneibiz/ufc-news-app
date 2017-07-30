angular.module('ufcNewsApp')
  .controller('NewsController', [
    '$window',
    'ufcService',
    NewsController
  ]);

function NewsController($window, ufcService) {
  const vm = this;

  vm.$onInit = function () {
    vm.news = [];
    ufcService.getNews().then(res => {
      vm.news = res.data;
      if (vm.news.length) {
        vm.primary = vm.news[0];
        vm.news.splice(0, 1);
      }
    });

    vm.buttons = [{
      name: 'Videos',
      action: vm.action,
      class: 'btn-detail'
    }, {
      name: 'Fighter',
      action: vm.action,
      class: 'btn-detail'
    }];
  }

  vm.viewDetail = function (item) {
    vm.primaryOld = vm.primary;
    vm.primary = item;
    $window.scrollTo(0, 0);
  };

  vm.action = function () {
    console.log('funciona carai');
  };
}
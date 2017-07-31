angular.module('ufcNewsApp')
  .controller('NewsController', [
    '$window',
    '$state',
    '$rootScope',
    'ufcService',
    NewsController
  ]);

function NewsController($window, $state, $rootScope, ufcService) {
  const vm = this;

  vm.$onInit = function () {
    $rootScope.$broadcast("news");
    vm.news = [];
    ufcService.getNews().then(res => {
      vm.news = res.data;
      if (vm.news.length) {
        vm.primary = vm.news[0];
        vm.news.splice(0, 1);
      }
    });

    vm.buttons = [{
      name: 'Fighters',
      action: vm.goFighters,
      class: 'btn-detail'
    }];
  }

  vm.viewDetail = function (item) {
    vm.primaryOld = vm.primary;
    vm.primary = item;
    $window.scrollTo(0, 0);
  };

  vm.goFighters = function () {
    $state.go('fighters');
  };
}
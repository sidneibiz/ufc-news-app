angular.module('ufc-news-app')
  .controller('newsController', [
    '$scope',
    'ufcService',
    NewsController
  ]);

function NewsController($scope, ufcService) {
  const vm = this;

  vm.news = [];

  vm.viewDetail = (item) => {
    vm.primaryOld = vm.primary;
    vm.primary = item;
    window.scrollTo(0, 0);
  };

  ufcService.get('news').then(res => {
    vm.news = res.data;
    if (vm.news.length) {
      vm.primary = vm.news[0];
      vm.news.splice(0, 1);
    }
  });
}
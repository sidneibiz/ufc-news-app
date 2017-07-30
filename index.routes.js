angular.module('ufcNewsApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/news');

    $stateProvider
      .state('news', {
        url: '/news',
        templateUrl: 'app/containers/news/news.html',
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/containers/home/home.html',
      })
      .state('fighters', {
        url: '/fighters',
        templateUrl: 'app/containers/fighters/fighters.html',
      })
      .state('tickets', {
        url: '/tickets',
        templateUrl: 'app/containers/home/home.html',
      })
  }
]);
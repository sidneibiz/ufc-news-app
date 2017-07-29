angular.module('ufc-news-app').config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/ufc');

    $stateProvider
      .state('ufc', {
        url: '/ufc',
        abstract: true,
        templateUrl: 'src/app/containers/home/home.html',
      })
  }
]);
angular.module('ufc-news-app').config([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/ufc');

    $stateProvider
      .state('ufc', {
        url: '/ufc',
        templateUrl: 'app/containers/home/home.html',
        // template: '<h2>Teste</h2>',
      })
  }
]);
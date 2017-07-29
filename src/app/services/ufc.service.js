angular.module('ufc-news-app').service([
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/ufc');

    $stateProvider.state('ufc', {
      url: '/ufc',
      // templateUrl: 'dashboard/dashboard.html'
    });

  }
]);
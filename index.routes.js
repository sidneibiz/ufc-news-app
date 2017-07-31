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
        templateUrl: 'app/containers/events/events.html',
      })
      .state('fighters', {
        url: '/fighters',
        templateUrl: 'app/containers/fighters/fighters.html',
      })
      .state('tickets', {
        url: '/tickets',
        templateUrl: 'app/containers/tickets/tickets.html',
        params: {
          id: undefined
        },
      })
      .state('fighters-detail', {
        url: '/fighters-detail',
        templateUrl: 'app/containers/fighters/fighter-detail.html',
        params: {
          id: undefined
        },
        onEnter: ($state, $stateParams) => {
          if (!$stateParams.id) return $state.transitionTo('fighters');
        }
      });
  }
]);
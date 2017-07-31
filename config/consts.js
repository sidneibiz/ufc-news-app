angular.module('ufcNewsApp').constant('consts', {
  appName: 'UFC News',
  apiURL: 'http://ufc-data-api.ufc.com/api/v3',
}).run([
  '$rootScope',
  'consts',
  ($rootScope, consts) => {
    $rootScope.consts = consts
  }
]);
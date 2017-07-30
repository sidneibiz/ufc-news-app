angular.module('ufcNewsApp').constant('consts', {
  appName: 'UFC News',
  version: '0.1.0',
  year: '2017',
  apiURL: 'http://ufc-data-api.ufc.com/api/v3',
}).run([
  '$rootScope',
  'consts',
  ($rootScope, consts) => {
    $rootScope.consts = consts
  }
]);
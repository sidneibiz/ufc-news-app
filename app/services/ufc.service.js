angular.module('ufc-news-app').service('ufcService', [
  '$http',
  'consts',
  UFCService
]);

function UFCService($http, consts) {

  const get = (url, params) => {
    if (params) return $http.get(`${consts.apiURL}/${url}/${params}`);
    else return $http.get(`${consts.apiURL}/${url}/`);
  };

  return { get };
}
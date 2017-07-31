angular.module('ufcNewsApp').service('ufcService', [
  '$http',
  'consts',
  UFCService
]);

function UFCService($http, consts) {

  const getNews = (params) => get('news', params);
  const getFighters = (params) => get('fighters', params);
  const getEvents = (params) => get('events', params);
  const getTicketForEvent = (params) => $http.get(`${consts.apiURL}/events/${params}/tickets`);

  const get = (url, params) => {
    if (params) return $http.get(`${consts.apiURL}/${url}/${params}`);
    return $http.get(`${consts.apiURL}/${url}/`);
  };

  return { getNews, getFighters, getEvents, getTicketForEvent };
}
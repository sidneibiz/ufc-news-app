angular.module('ufcNewsApp').component('sidebar', {
  templateUrl: 'app/components/sidebar/sidebar.html',
  controller: ['$location', '$rootScope', SideBarController],
  controllerAs: 'vm'
});

function SideBarController($location, $rootScope) {
  const vm = this;
  vm.selected = 'news';

  $rootScope.$on('news', function (event) {
    vm.selected = event.name;
  });
  $rootScope.$on('events', function (event) {
    vm.selected = event.name;
  });
  $rootScope.$on('fighters', function (event) {
    vm.selected = event.name;
  });
  $rootScope.$on('tickets', function (event) {
    vm.selected = event.name;
  });

  vm.click = function (_selected, event) {
    if (_selected) vm.selected = _selected;
    else vm.selected = event.name;
  }
} 
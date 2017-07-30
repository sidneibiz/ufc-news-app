angular.module('ufc-news-app').component('sidebar', {
  'templateUrl': 'app/components/sidebar/sidebar.html',
  'controller': SideBarController,
  'controllerAs': 'vm'

});

function SideBarController() {
  const vm = this;
  vm.selected = 'news';

  vm.click = (_selected) => {
    vm.selected = _selected;
  }
}
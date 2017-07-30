angular.module('ufcNewsApp').component('inputList', {
  templateUrl: 'app/components/input-list/input-list.html',
  controller: InputListController,
  controllerAs: 'vm',
  bindings: {
    placeholder: '@',
    placeholderButton: '@',
    items: '=',
    identificator: '@',
    model: '='
  }
});

function InputListController() {
  const vm = this;
}
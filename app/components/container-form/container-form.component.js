angular.module('ufcNewsApp').component('containerForm', {
  templateUrl: 'app/components/container-form/container-form.html',
  controller: ContainerFormController,
  controllerAs: 'vm',
  bindings: {
    type: '@',
    primary: '=',
    buttons: '=',
    model: '=',
    placeholder: '@',
    placeholderButton: '@',
    inputList: '=',
    values: '=',
    viewDetail: '='
  }
});

function ContainerFormController() {
  const vm = this;

  vm.search = {};
}
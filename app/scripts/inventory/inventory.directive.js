(function(){

  app.directive('inventory', Inventory);

  function Inventory() {

    return {
      controller: InventoryCtrl,
      controllerAs: 'vm',
      bindToController: true,
      restrict: 'E',
      scope: {},
      template: [
        '<guardian-picker></guardian-picker>',
        '<buckets></buckets>'
      ].join('')
    };
  }

  InventoryCtrl.$inject = ['$scope'];

  function InventoryCtrl ($scope) {
  }

}());
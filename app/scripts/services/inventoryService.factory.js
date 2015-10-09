(function(){

  app.factory('inventoryService', InventoryService);

  InventoryService.$inject = ['$rootScope', '$http', 'bungieService'];

  function InventoryService($rootScope, $http) {

    var factoryServices = {
      getInventory : getInventory
    }

    return factoryServices;


    /*********************************************************/



  }
})();
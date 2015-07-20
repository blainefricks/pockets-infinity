var dubApp = angular.module('dubApp', []);

dubApp.controller('dubAppCtrl', function ($scope){
  $scope.inventoryItems = [
    {"itemName":"Gjallarhorn",
    "itemDescription":"\"If there is beauty in destruction, why not also in its delivery?\" - Feizel Crux",
    "tierTypeName":"Exotic",
    "itemType" : "Rocket Launcher"
    },
    {"itemName":"Her Right Hand",
    "itemDescription":"The Royal Guard's weapon of choice.",
    "tierTypeName":"Legendary",
    "itemType" : "Auto Rifle"
    }

  ];
});
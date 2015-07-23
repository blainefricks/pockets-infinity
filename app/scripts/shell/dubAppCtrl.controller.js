dubApp.controller('dubAppCtrl', ['$scope', function($scope) {
  $scope.inventoryPrimaryWeaponItems = [
    {
      itemHash: "12345",
      itemName: "Her Right Hand",
      tierTypeName:"Legendary",
      itemType: "Auto Rifle",
      statValue: "statValue",
      itemDescription:"The Royal Guard's weapon of choice.",
      statName: "statName",
      valueNumber: "valueNumber",
      itemPerkDescription: "itemPerkDescription",
    },
    {
      itemHash: "3164616404",
      itemName:"Thorn",
      itemType: "Hand Cannon",
      tierTypeName:"Exotic",
      itemDescription:"\"To rend one's enemies is to see them not as equals, but objects—hollow of spirit and meaning.\" - 13th Understanding, 7th Book of Sorrow",
      statName: "statName",
      valueNumber: "valueNumber",
      itemPerkDescription: "itemPerkDescription",
    }
    ];
    $scope.inventorySubclassItems = [{}];
}])
.directive('dubInventory', function() {
  return {
    templateUrl: 'views/dub-inventory.html'
  };
});
dubApp.controller('dubAppCtrl', ['$scope', function($scope) {
  // Equipped Subclass
  $scope.inventorySubclassItems_Equipped = [
    {
      itemHash: "itemHash",
      itemName: "Sungsinger",
      itemType: "Warlock Subclass",
    },
  ];
  // Unequipped Subclasses
  $scope.inventorySubclassItems = [
    {
      itemHash: "itemHash",
      itemName: "Voidwalker",
      itemType: "Warlock Subclass",
    },
  ];
  // Equipped Primary Weapon
  $scope.inventoryPrimaryWeaponItems_Equipped = [
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
  ];
  // Unequipped Primary Weapons
  $scope.inventoryPrimaryWeaponItems = [
    {
      itemHash: "3164616404",
      itemName:"Thorn",
      itemType: "Hand Cannon",
      tierTypeName:"Exotic",
      itemDescription:"\"To rend one's enemies is to see them not as equals, but objects—hollow of spirit and meaning.\" - 13th Understanding, 7th Book of Sorrow",
      statName: "statName",
      valueNumber: "valueNumber",
      itemPerkDescription: "itemPerkDescription",
    },
    {
      itemHash: "itemHash",
      itemName:"itemName",
      itemType: "itemType",
      tierTypeName:"tierTypeName",
      itemDescription:"itemDescription",
      statName: "statName",
      valueNumber: "valueNumber",
      itemPerkDescription: "itemPerkDescription",
    }
  ];
  $scope.inventorySpecialWeaponItems_Equipped = [
    {
      itemHash: "itemHash",
      itemName: "Amplified Geo-D6",
      tierTypeName:"Legendary",
      itemType: "Sniper Rifle",
      statValue: "statValue",
      itemDescription:"Shortest distance between two points across a curved visual axis: Aim + Squeeze.",
      statName: "statName",
      valueNumber: "valueNumber",
      itemPerkDescription: "itemPerkDescription",
    },
  ];
  $scope.inventorySpecialWeaponItems = [
    {
      itemHash: "12345",
      itemName: "itemName",
      tierTypeName:"tierTypeName",
      itemType: "itemType",
      statValue: "statValue",
      itemDescription:"itemDescription",
      statName: "statName",
      valueNumber: "valueNumber",
      itemPerkDescription: "itemPerkDescription",
    },
  ];
}])
.directive('dubInventory', function() {
  return {
    templateUrl: 'views/dub-inventory.html'
  };
});
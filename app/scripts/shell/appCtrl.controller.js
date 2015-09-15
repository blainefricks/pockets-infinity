(function(){

  app.controller('appCtrl', App);

  App.$inject = ['$scope', 'bungieService'];

  function App($scope, bungieService) {

    bungieService.getBungieNetUser();


    // Guardians
    $scope.guardians = [
    {
      backgroundPath: 'https://www.bungie.net/common/destiny_content/icons/22e446f665be869f2fff588370a3cb3d.jpg',
      emblemPath: 'https://www.bungie.net/common/destiny_content/icons/ff1ca3e58f41b13bc17c9bb711844f64.jpg',
      characterClass: 'Warlock',
      id: '1234',
      dateLastPlayed: '2015-08-23T16:45:33Z',
      gender: 'Male',
      light: '165',
      level: '34',
      percentToNextLevel: '50',
      race: 'Awoken'
    },
    {
      backgroundPath: 'https://www.bungie.net/common/destiny_content/icons/22e446f665be869f2fff588370a3cb3d.jpg',
      emblemPath: 'https://www.bungie.net/common/destiny_content/icons/ff1ca3e58f41b13bc17c9bb711844f64.jpg',
      characterClass: 'Titan',
      id: '2345',
      dateLastPlayed: '2015-08-26T16:45:33Z',
      light: '115',
      gender: 'Male',
      level: '31',
      percentToNextLevel: '85',
      race: 'Exo'
    },
    {
      backgroundPath: 'https://www.bungie.net/common/destiny_content/icons/22e446f665be869f2fff588370a3cb3d.jpg',
      emblemPath: 'https://www.bungie.net/common/destiny_content/icons/ff1ca3e58f41b13bc17c9bb711844f64.jpg',
      characterClass: 'Hunter',
      id: '5678',
      dateLastPlayed: '2015-08-19T16:45:33Z',
      gender: 'Male',
      light: '98',
      level: '19',
      percentToNextLevel: '15',
      race: 'Exo'
    }
  ];

    // Equipped Subclass
    $scope.inventorySubclassItems_Equipped = [
      {
        itemHash: "itemHash",
        itemName: "Sungsinger",
        tierTypeName:"Common",
        itemType: "Warlock Subclass",
        itemDescription: "There are flames that even the Darkness cannot extinguish.",
      },
    ];
    // Unequipped Subclasses
    $scope.inventorySubclassItems = [
      {
        itemHash: "itemHash",
        itemName: "Voidwalker",
        tierTypeName:"Common",
        itemType: "Warlock Subclass",
        itemDescription: "Those who have stared into the Void are not bound by the laws of space and time.",
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
      }
    ];
    // Equipped Special Weapon
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
    // Unequipped Special Weapons
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
      }
    ];
    // Equipped Heavy Weapon
    $scope.inventoryHeavyWeaponItems_Equipped = [
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
      }
    ];
    // Unequipped Heavy Weapons
    $scope.inventoryHeavyWeaponItems = [
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
      }
    ];
    // Equipped Head Armor
    $scope.inventoryHeadItems_Equipped = [
      {
        itemHash: "12345",
        itemName: "Equipped Head Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Unequipped Head Armor
    $scope.inventoryHeadItems = [
      {
        itemHash: "12345",
        itemName: "Unequipped Head Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Equipped Arm Armor
    $scope.inventoryArmItems_Equipped = [
      {
        itemHash: "12345",
        itemName: "Equipped Arm Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Unequipped Arm Armor
    $scope.inventoryArmItems = [
      {
        itemHash: "12345",
        itemName: "Unequipped Arm Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Equipped Chest Armor
    $scope.inventoryChestItems_Equipped = [
      {
        itemHash: "12345",
        itemName: "Equipped Chest Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Unequipped Chest Armor
    $scope.inventoryChestItems = [
      {
        itemHash: "12345",
        itemName: "Unequipped Chest Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Equipped Leg Armor
    $scope.inventoryLegItems_Equipped = [
      {
        itemHash: "12345",
        itemName: "Equipped Leg Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Unequipped Leg Armor
    $scope.inventoryLegItems = [
      {
        itemHash: "12345",
        itemName: "Unequipped Leg Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Equipped Class Item
    $scope.inventoryClassItems_Equipped = [
      {
        itemHash: "12345",
        itemName: "Equipped Class Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
    // Unequipped Class Armor
    $scope.inventoryClassItems = [
      {
        itemHash: "12345",
        itemName: "Unequipped Class Armor",
        tierTypeName:"tierTypeName",
        itemType: "itemType",
        statValue: "statValue",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      }
    ];
  }
}());
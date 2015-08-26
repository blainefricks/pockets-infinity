(function(){

  app.controller('appCtrl', App);

  App.$inject = ['$scope', 'bungieService'];

  function App($scope, bungieService) {

    bungieService.getBungieNetUser();

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
      },
      {
        itemHash: "itemHash",
        itemName:"itemName",
        itemType: "itemType",
        tierTypeName:"Uncommon",
        itemDescription:"itemDescription",
        statName: "statName",
        valueNumber: "valueNumber",
        itemPerkDescription: "itemPerkDescription",
      },
      {
        itemHash: "itemHash",
        itemName:"itemName",
        itemType: "itemType",
        tierTypeName:"Rare",
        itemDescription:"itemDescription",
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
      },
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
    // Guardians
    $scope.guardians = [
    {
      displayName: 'Reclaimer01',
      className: 'Warlock',
      powerLevel: '32',
      guardianProgress: '50%',
      nameplateURL: 'https://www.bungie.net/common/destiny_content/icons/d482a38c8062563aa3bc641856b85161.jpg'
    },
    {
      displayName: 'Reclaimer01',
      className: 'Titan',
      powerLevel: '31',
      guardianProgress: '50%',
      nameplateURL: 'https://www.bungie.net/common/destiny_content/icons/756173d646f132f1de9d87545caa1054.jpg'
    },
    {
      displayName: 'Reclaimer01',
      className: 'Hunter',
      powerLevel: '31',
      guardianProgress: '50%',
      nameplateURL: 'https://www.bungie.net/common/destiny_content/icons/4b7ec936d5acb61f37077d0783952573.jpg'
    }
  ];
  }
}());
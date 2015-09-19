(function(){

  app.controller('appCtrl', App);

  App.$inject = ['$scope', 'bungieService'];

  function App($scope, bungieService) {

    bungieService.getBungieNetUser();

    // Buckets
    $scope.bucketsLeft = [
      {
        id: "bucket-subclass",
        label: "Sublcass",
        equipped: [
          {
            itemHash: "itemHash",
            itemName: "Sungsinger",
            tierTypeName:"Common",
            itemType: "Warlock Subclass",
            itemDescription: "There are flames that even the Darkness cannot extinguish.",
            itemImageURL: "images/subclass-void.jpg",
            itemAction: "",
          }
        ],
        unequipped: [
          {
            itemHash: "itemHash",
            itemName: "Voidwalker",
            tierTypeName:"Common",
            itemType: "Warlock Subclass",
            itemDescription: "Those who have stared into the Void are not bound by the laws of space and time.",
            itemImageURL: "images/subclass-void.jpg",
            itemAction: "Equip",
          }
        ],
      },
      {
        id: "bucket-primary-weapons",
        label: "Primary Weapons",
        equipped: [
          {
            itemHash: "3164616404",
            itemName:"Thorn",
            itemType: "Hand Cannon",
            tierTypeName:"Exotic",
            statValue: "statValue",
            itemDescription:"\"To rend one's enemies is to see them not as equals, but objects—hollow of spirit and meaning.\" - 13th Understanding, 7th Book of Sorrow",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-primary-exotic.jpg",
            itemAction: "",
          },
        ],
        unequipped: [

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
            itemImageURL: "images/weapon-primary-legendary.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Common",
            itemDescription:"itemDescription",
            statName: "statName",
            statValue: "statValue",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-special-common.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Rare",
            itemDescription:"itemDescription",
            statName: "statName",
            statValue: "statValue",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-primary-legendary.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-primary-legendary.jpg",
            itemAction: "Equip",
          },
        ],
      },
      {
        id: "bucket-special-weapons",
        label: "Special Weapons",
        equipped: [
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
            itemImageURL: "images/weapon-special-legendary.jpg",
          }
        ],
        unequipped: [
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
            itemImageURL: "images/weapon-special-exotic.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-special-common.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-special-common.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-special-common.jpg",
            itemAction: "Equip",
          }
        ],
      },
      {
        id: "bucket-heavy-weapons",
        label: "Heavy Weapons",
        equipped: [
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
            itemImageURL: "images/weapon-heavy-legendary.jpg",
          }
        ],
        unequipped: [
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
            itemImageURL: "images/weapon-heavy-exotic.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-heavy-legendary.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-heavy-legendary.jpg",
            itemAction: "Equip",
          },
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/weapon-heavy-legendary.jpg",
            itemAction: "Equip",
          }
        ],
      },
      {
        id: "bucket-ghost_shells",
        label: "Ghost Shells",
        equipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Rare",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/ghost-rare.jpg",
          }
        ],
        unequipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Rare",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/ghost-rare.jpg",
            itemAction: "Equip",
          }
        ]
      }
    ];

    $scope.bucketsRight = [
      {
        id: "bucket-helmets",
        label: "Helmets",
        equipped: [
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"Legendary",
            itemType: "itemType",
            statValue: "statValue",
            itemDescription:"itemDescription",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/armor-helmet-legendary.jpg",
            itemAction: "",
          }
        ],
        unequipped: [
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
            itemImageURL: "images/armor-helmet-legendary.jpg",
            itemAction: "Equip",
          }
        ]
      },
      {
        id: "bucket-gauntlets",
        label: "Gauntlets",
        equipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Legendary",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/armor-gauntlet-legendary.jpg",
            itemAction: "",
          }
        ],
        unequipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"tierTypeName",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/armor-gauntlet-legendary.jpg",
            itemAction: "Equip",
          }
        ]
      },
      {
        id: "bucket-armor-chest",
        label: "Chest Armor",
        equipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Exotic",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/armor-chest-exotic.jpg",
            itemAction: "",
          }
        ],
        unequipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Legendary",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/armor-chest-legendary.jpg",
            itemAction: "Equip",
          }
        ]
      },
      {
        id: "bucket-armor-legs",
        label: "Leg Armor",
        equipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Legendary",
            itemDescription:"itemDescription",
            statValue: "statValue",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "",
          }
        ],
        unequipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Legendary",
            itemDescription:"itemDescription",
            statName: "statName",
            statValue: "statValue",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
          }
        ]
      },
      {
        id: "bucket-armor-class",
        label: "Class Armor",
        equipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Legendary",
            itemDescription:"itemDescription",
            statName: "statName",
            statValue: "statValue",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/armor-class-legendary.jpg",
            itemAction: "",
          }
        ],
        unequipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Rare",
            itemDescription:"itemDescription",
            statName: "statName",
            statValue: "statValue",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/armor-class-legendary.jpg",
            itemAction: "Equip",
          }
        ]
      },
      {
        id: "bucket-artifacts",
        label: "Artifacts",
        equipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Legendary",
            itemDescription:"itemDescription",
            statName: "statName",
            statValue: "statValue",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "",
          }
        ],
        unequipped: [
          {
            itemHash: "itemHash",
            itemName:"itemName",
            itemType: "itemType",
            tierTypeName:"Legendary",
            itemDescription:"itemDescription",
            statName: "statName",
            statValue: "statValue",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
          }
        ]
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
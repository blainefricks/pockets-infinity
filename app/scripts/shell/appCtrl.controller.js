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
          },
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"Exotic",
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
  }

}());
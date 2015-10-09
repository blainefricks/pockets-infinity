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
        '<ul class="bucketList" ng-repeat="bucket in vm.buckets" id="{{bucket.id}}">',
          '<div class="bucketLabel">{{bucket.label}}</div>',
          '<li ng-repeat="bucketItem in bucket.bucketItems" class="bucketItem">',
            '<destiny-tooltip></destiny-tooltip>',
            '<div class="bucketItemImage" style="background-image:url(\'{{bucketItem.itemImageURL}}\');"></div>',
            '<div class="bucketItemName">{{bucketItem.itemName}}</div>',
            '<div class="bucketItemOwner">{{bucketItem.itemOwner}}</div>',
            '<div class="bucketItemPower">{{bucketItem.statValue}}</div>',
          '</li>',
        '</ul>'
      ].join('')
    };
  }

  InventoryCtrl.$inject = ['$scope'];

  function InventoryCtrl ($scope) {
    var vm = this;
    vm.buckets = [];

    // dev data
    vm.buckets = [
      {
        id: "bucket-primary-weapons",
        label: "Primary Weapons",
        bucketItems: [
          {
            itemHash: "3164616404",
            itemName:"Exotic Weapon",
            itemType: "Hand Cannon",
            tierTypeName:"Exotic",
            statValue: "160",
            itemDescription:"\"To rend one's enemies is to see them not as equals, but objects—hollow of spirit and meaning.\" - 13th Understanding, 7th Book of Sorrow",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "",
            itemOwner: "Warlock",
          },
          {
            itemHash: "12345",
            itemName: "Legendary Weapon",
            tierTypeName:"Legendary",
            itemType: "Auto Rifle",
            statValue: "160",
            itemDescription:"The Royal Guard's weapon of choice.",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
            itemOwner: "Warlock",
          },
        ]
      },
      {
        id: "bucket-special-weapons",
        label: "Special Weapons",
        bucketItems: [
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"tierTypeName",
            itemType: "itemType",
            statValue: "160",
            itemDescription:"itemDescription",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
            itemOwner: "Warlock",
          },
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"tierTypeName",
            itemType: "itemType",
            statValue: "160",
            itemDescription:"itemDescription",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
            itemOwner: "Warlock",
          },
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"tierTypeName",
            itemType: "itemType",
            statValue: "160",
            itemDescription:"itemDescription",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
            itemOwner: "Warlock",
          }
        ]
      },
      {
        id: "bucket-heavy-weapons",
        label: "Heavy Weapons",
        bucketItems: [
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"tierTypeName",
            itemType: "itemType",
            statValue: "160",
            itemDescription:"itemDescription",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
            itemOwner: "Warlock",
          }
        ]
      },
      {
        id: "bucket-ghost-shells",
        label: "Ghost Shells",
        bucketItems: [
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"tierTypeName",
            itemType: "itemType",
            statValue: "160",
            itemDescription:"itemDescription",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
            itemOwner: "Warlock",
          }
        ]
      },
      {
        id: "bucket-artifacts",
        label: "Artifacts",
        bucketItems: [
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"tierTypeName",
            itemType: "itemType",
            statValue: "160",
            itemDescription:"itemDescription",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
            itemOwner: "Warlock",
          }
        ]
      },
      {
        id: "bucket-template",
        label: "Label-Placeholder",
        bucketItems: [
          {
            itemHash: "12345",
            itemName: "itemName",
            tierTypeName:"tierTypeName",
            itemType: "itemType",
            statValue: "160",
            itemDescription:"itemDescription",
            statName: "statName",
            valueNumber: "valueNumber",
            itemPerkDescription: "itemPerkDescription",
            itemImageURL: "images/missing_icon.png",
            itemAction: "Equip",
            itemOwner: "Warlock",
          }
        ]
      }
    ];
    // end dev data

    $scope.$on('inventory-updated', function (e, args){
      console.log("Broadcast Received: inventory-updated"); // dev
      vm.buckets = args.buckets;
      console.log(vm.buckets);
    });
  }

}());
(function(){

  app.directive('bucketItem', BucketItem);

  function BucketItem() {

    return {
      controller: BucketItemCtrl,
      controllerAs: 'vm',
      bindToController: true,
      restrict: 'E',
      scope: {
        'bucketItem': '=bucketItemData'
      },
      template: [
        '<destiny-tooltip tooltip-data="vm.bucketItem[0]"></destiny-tooltip>',
        '<div class="bucketItemImage" style="background-image:url(\'{{vm.bucketItem[0].itemImageURL}}\');"></div>',
        '<div class="bucketItemName">{{vm.bucketItem[0].itemName}}</div>',
        '<div class="bucketItemOwner">{{vm.bucketItem[0].itemOwner}}</div>',
        '<div class="bucketItemPower">{{vm.bucketItem[0].statValue}}</div>',
      ].join('')
    };
  }

  BucketItemCtrl.$inject = ['$scope'];

  function BucketItemCtrl ($scope) {

  }

}());
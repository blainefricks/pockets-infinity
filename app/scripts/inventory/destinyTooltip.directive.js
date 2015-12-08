(function(){

  app.directive('destinyTooltip', function() {
    return {
      restrict: 'E',
      scope: {
        'bucketItem': '=tooltipData'
      },
      templateUrl: "views/destiny-tooltip.html"
    };
  });

}());
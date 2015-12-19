(function(){
  'use strict';

  app.directive('appHeader', AppHeader);

  function AppHeader() {

    return {
      controller: AppHeaderCtrl,
      controllerAs: 'vm',
      bindToController: true,
      restrict: 'E',
      scope: {},
      template: [
        '<div class="version-number">Pockets Infinity v0.1.1-alpha</div>',
        '<div id="user" ng-repeat="user in vm.user">{{user.handle}}</div>'
      ].join('')
    };
  };

  AppHeaderCtrl.$inject = ['$scope'];

  function AppHeaderCtrl ($scope) {
    var vm = this;
    // vm.user = [];

    // dev data

    // vm.user = [
    //   {
    //     handle : 'Reclaimer01',
    //     id : '1234',
    //     platform : 1
    //   }
    // ];

    // end dev data

    $scope.$on('user-updated', function (e, args) {
      console.log("appHeader Broadcast Received: user-updated"); // dev
      vm.user = args.user;
      console.log(vm.user);
    });
  }

}());
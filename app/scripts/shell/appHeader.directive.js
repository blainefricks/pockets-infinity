(function(){

  app.directive('appHeader', function() {

    return {
      controller: AppHeaderCtrl,
      controllerAs: 'vm',
      bindToController: true,
      restrict: 'E',
      scope: {},
      template: [
        '<div class="version-number">Pockets Infinity v0.1.1-alpha</div>',
        '<div id="user">{{vm.active.user}}</div>'
      ].join('')
    };
  });

  AppHeaderCtrl.$inject = ['$scope'];

  function AppHeaderCtrl ($scope) {
    var vm = this;
    vm.active = [
      {
        id: "Username"
      }
    ];
  }

}());
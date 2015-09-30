 (function(){

  // 'vm' is 'view-model'

  app.directive('guardianPicker', GuardianPicker);

  function GuardianPicker() {
    console.log("guardianPicker"); // dev

    return {
      controller: GuardianPickerCtrl,
      controllerAs: 'vm',
      bindToController: true,
      restrict: 'E',
      scope: {},
      template: [
        '<div ng-repeat="guardian in guardians" class="guardianContainer" id="{{guardian.id}}" style="background-image:url({{guardian.backgroundPath}})">',
        '  <div class="emblem" style="background-image:url({{guardian.emblemPath}});"></div>',
        '  <div class="guardianDetails">',
        '    <div class="guardianClass">{{guardian.characterClass}}</div>',
        '    <div class="guardianRace">{{guardian.race}} {{guardian.gender}}</div>',
        '    <div class="guardianLevel">{{guardian.level}}</div>',
        '    <div class="guardianLight">{{guardian.light}}</div>',
        '  </div>',
        '  <div class="guardianProgress">',
        '    <div class="barFill" style="width:{{guardian.percentToNextLevel}}%;"></div>',
        '  </div>',
        '</div>'
      ].join('')
    };
  }

  GuardianPickerCtrl.$inject = ['$scope'];

  function GuardianPickerCtrl($scope) {
    var vm = this;

    $scope.$on('guardians-updated', function (e, args) {
      console.log("Broadcast Received: guardians-updated"); // dev
      vm.guardians = args.guardians;
      console.log(vm.guardians); // dev
    });
  }

 }());
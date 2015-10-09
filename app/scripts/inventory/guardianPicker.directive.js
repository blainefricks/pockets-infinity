 (function(){

  // 'vm' is 'view-model'

  app.directive('guardianPicker', GuardianPicker);

  GuardianPicker.$inject = ['$timeout'];

  function GuardianPicker($timeout) {
    console.log("guardianPicker"); // dev

    return {
      controller: GuardianPickerCtrl,
      controllerAs: 'vm',
      bindToController: true,
      link: Link,
      restrict: 'E',
      scope: {},
      template: [
        '<div ng-repeat="guardian in vm.guardians" class="guardianContainer" id="{{guardian.id}}" style="background-image:url({{guardian.backgroundPath}})">',
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

    function Link (element, attribute, transclude) {
      $timeout(function () {
        $timeout(function () {
          // body...
        }, 0);
      }, 0);
    }
  }

  GuardianPickerCtrl.$inject = ['$scope'];

  function GuardianPickerCtrl($scope) {
    var vm = this;
    vm.guardians = [];

    // dev data

    // vm.guardians = [
    //   {
    //     backgroundPath: 'https://www.bungie.net/common/destiny_content/icons/22e446f665be869f2fff588370a3cb3d.jpg',
    //     emblemPath: 'https://www.bungie.net/common/destiny_content/icons/ff1ca3e58f41b13bc17c9bb711844f64.jpg',
    //     characterClass: 'Warlock',
    //     id: '1234',
    //     dateLastPlayed: '2015-08-23T16:45:33Z',
    //     gender: 'Male',
    //     light: '165',
    //     level: '34',
    //     percentToNextLevel: '50',
    //     race: 'Awoken'
    //   },
    //   {
    //     backgroundPath: 'https://www.bungie.net/common/destiny_content/icons/22e446f665be869f2fff588370a3cb3d.jpg',
    //     emblemPath: 'https://www.bungie.net/common/destiny_content/icons/ff1ca3e58f41b13bc17c9bb711844f64.jpg',
    //     characterClass: 'Titan',
    //     id: '2345',
    //     dateLastPlayed: '2015-08-26T16:45:33Z',
    //     light: '115',
    //     gender: 'Male',
    //     level: '31',
    //     percentToNextLevel: '85',
    //     race: 'Exo'
    //   },
    //   {
    //     backgroundPath: 'https://www.bungie.net/common/destiny_content/icons/22e446f665be869f2fff588370a3cb3d.jpg',
    //     emblemPath: 'https://www.bungie.net/common/destiny_content/icons/ff1ca3e58f41b13bc17c9bb711844f64.jpg',
    //     characterClass: 'Hunter',
    //     id: '5678',
    //     dateLastPlayed: '2015-08-19T16:45:33Z',
    //     gender: 'Male',
    //     light: '98',
    //     level: '19',
    //     percentToNextLevel: '15',
    //     race: 'Exo'
    //   }
    // ];

    // end dev data

    $scope.$on('guardians-updated', function (e, args) {
      console.log("Broadcast Received: guardians-updated"); // dev
      vm.guardians = args.guardians;
      console.log(vm.guardians); // dev
    });
  }

 }());
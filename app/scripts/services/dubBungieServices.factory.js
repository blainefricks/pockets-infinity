(function(){

  dubApp.factory('dubBungieServices', BungieService);

  BungieService.$inject = ['$q'];

   function BungieService($q) {

    function getCurrentUser() {
      return {
        method: 'GET',
        url: 'https://www.bungie.net/platform/user/getbungienetuser/',
        headers: {
          'X-API-Key': apiKey,
        }
      };
    };

    function getGuardianInventoryRequest(platform, membershipId, character) {
      return {
        method: 'GET',
        url: 'https://bungie.net/Destiny/' + platform + '/Account/' + membershipId + '/Character/' + character + '/Inventory/',
        headers: {
          'X-API-Key': apiKey,
        }
      }
    };
  }
})();
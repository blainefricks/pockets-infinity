(function(){

  dubApp.factory('dubBungieService', BungieService);

  BungieService.$inject = ['$q', '$http'];

   function BungieService($q, $http) {

    function getBungieCookies() {
      // body...
    };

    function getCurrentUserRequest() {
      return {
        method: 'GET',
        url: 'https://www.bungie.net/platform/user/getbungienetuser/',
        headers: {
          'X-API-Key': apiKey,
        }
      };
    }

    function getGuardiansRequest() {
      return {
        method: 'GET',
        url: '',
        headers: {
          'X-API-Key': apiKey,
        }
      };
    }

    function getGuardianInventoryRequest(platform, membershipId, character) {
      return {
        method: 'GET',
        url: 'https://bungie.net/Destiny/' + platform + '/Account/' + membershipId + '/Character/' + character + '/Inventory/',
        headers: {
          'X-API-Key': apiKey,
        }
      };
    }
  }
})();
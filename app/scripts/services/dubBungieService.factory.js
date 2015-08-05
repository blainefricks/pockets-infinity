(function(){

  dubApp.factory('dubBungieService', BungieService);

  BungieService.$inject = ['$q', '$http'];

   function BungieService($q, $http) {

    var bungledValue = null;


    /*********************************************************/


    function getBungieCookies(callback) {
      return chrome.cookies.getAll({
        'domain' : '.bungie.net',
        'name' : 'bungled'
      }, getAllCallback.bind(this, callback));

      function getAllCallback(callback, cookies) {
        if (cookies.length > 0) {
          callback(cookies[0].value);
        } else{
          alert("Error: No cookies found.");
        };
      };
    };

    getBungieCookies(getCurrentUserRequest);


    /*********************************************************/


    function getCurrentUserRequest(token) {
      console.log(token); // dev
      return {
        method: 'GET',
        url: 'https://www.bungie.net/platform/user/getbungienetuser/',
        headers: {
          'X-API-Key': apiKey,
          'x-csrf': token
        }
      };
    }

    function getGuardiansRequest(token) {
      return {
        method: 'GET',
        url: '',
        headers: {
          'X-API-Key': apiKey,
          'x-csrf': token
        }
      };
    }

    function getGuardianInventoryRequest(token, platform, membershipId, character) {
      return {
        method: 'GET',
        url: 'https://bungie.net/Destiny/' + platform + '/Account/' + membershipId + '/Character/' + character + '/Inventory/',
        headers: {
          'X-API-Key': apiKey,
          'x-csrf': token
        }
      };
    }
  }
  BungieService();
})();
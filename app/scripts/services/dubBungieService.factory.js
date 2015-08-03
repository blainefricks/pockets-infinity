(function(){

  dubApp.factory('dubBungieService', BungieService);

  BungieService.$inject = ['$q', '$http'];

   function BungieService($q, $http) {

    var bungledValue = null;

    function getBungieCookies() {
      chrome.cookies.getAll({
        'domain' : '.bungie.net',
        // 'name' : 'bungled'
      }, function (cookies) {
        if (cookies.length > 0) {
          // Cookies found.
          console.log(cookies);
        } else{
          alert("Error: No cookies found.");
        };
      });
    };

    function getBungledValue() {
      // Get the 'value' field of the cookie named 'bungled'
      bungledValue = getBungieCookies();

      return bungledValue;
    }
    console.log("Bungled Value: " + getBungledValue());

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
  BungieService();
})();
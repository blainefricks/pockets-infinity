(function(){

  dubApp.factory('dubBungieService', BungieService);

   function BungieService() {

    function apiRequest (method, url, token, request) {
      var xhr = new XMLHttpRequest();

      xhr.open(method, url, true);
      xhr.setRequestHeader("X-API-Key", apiKey, "X-CSRF", token);

      xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
          var json = JSON.parse(this.responseText);
          if (json.ErrorCode > 1) {
            alert("Error: " + json.ErrorStatus + "\n" + json.Message);
            console.log(json); // dev: log error
          } else {
            console.log(json); // dev: log response
          };
        };
      }

      xhr.send();
    }


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
      // Returns account information for the current user
      apiRequest("GET", "https://www.bungie.net/Platform/User/GetBungieNetUser/", token, Response.user);
    }

    function getGuardiansRequest(token) {
      apiRequest("GET", "",token, Response);
    }

    function getGuardianInventoryRequest(token, membershipType, membershipId, character) {
      // Returns the inventory for the supplied character.
      apiRequest("GET", 'https://bungie.net/Destiny/' + membershipType + '/Account/' + membershipId + '/Character/' + character.id + '/Inventory/', token, Response);
    }

  }
  BungieService();
})();
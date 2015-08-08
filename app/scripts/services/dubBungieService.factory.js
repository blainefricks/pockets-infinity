(function(){

  dubApp.factory('dubBungieService', BungieService);

   function BungieService() {
    var currentUserPromise = null;

    function apiRequest(method, url, token) {
      console.log("apiRequest(" + method + ", " + url + ", " + token + ")"); // dev
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.setRequestHeader("X-API-Key", apiKey, "X-CSRF", token);

        xhr.onreadystatechange = function() {
          var json = JSON.parse(this.responseText);
          resolve(response);
          reject(console.log("apiRequest is rejected;"));
        }
      });
    }


    /*********************************************************/


    function getBungieCookies() {
      return new Promise(function(resolve, reject) {
        chrome.cookies.getAll({
          'domain': '.bungie.net',
          'name': 'bungled'
        }, getAllCallback);

        function getAllCallback(cookies) {
          if (cookies.length > 0) {
            console.log("cookies[0].value: " + cookies[0].value); // dev
            resolve(cookies[0].value);
          } else{
            reject(alert("Error: No cookies found."));
          };
        }
      });
    }


    /*********************************************************/


    function getCurrentUser() {
      currentUserPromise = currentUserPromise || getBungieCookies()
        .then(getCurrentUserRequest);
      console.log(currentUserPromise); // dev
      return currentUserPromise;
    }

    getCurrentUser();

    function getCurrentUserRequest(token) {
      // Returns account information for the current user
      console.log("getCurrentUserRequest(" + token + ")"); // dev-note: Bungled Cookie Value
      apiRequest("GET", "https://www.bungie.net/Platform/User/GetBungieNetUser/", token)
        .then(function(json) {
          console.log(json.Response.user.membershipId); // dev: log the response for testing
        });
    }

    function getGuardiansRequest(token) {
      apiRequest("GET", "",token)
        .then(function(json) {
          console.log(json);
        });
    }

    function getGuardianInventoryRequest(token, membershipType, membershipId, character) {
      // Returns the inventory for the supplied character.
      apiRequest("GET", 'https://bungie.net/Destiny/' + membershipType + '/Account/' + membershipId + '/Character/' + character.id + '/Inventory/', token)
        .then(function(json) {
          console.log(json.Response);
        });
    }

  }
  BungieService();
})();
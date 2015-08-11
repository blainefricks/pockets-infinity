(function(){

  dubApp.factory('dubBungieService', BungieService);

   function BungieService() {
    var currentUserPromise = null;

    function apiRequest(request) {

      console.log("apiRequest(request)", request); // dev

      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(request.method, request.url, true);
        xhr.setRequestHeader("X-API-Key", apiKey, "X-CSRF", request.token);

        xhr.onreadystatechange = function(){
          if (this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.responseText);

            resolve(response);
            reject(console.log("apiRequest is rejected"));
          }
        }

        xhr.send();

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
        .then(getCurrentUserRequest)
        .then(apiRequest)
        .then(processCurrentUserRequest)
        .catch(function(error) {
          console.log("Failed!", error);
        });

      return currentUserPromise;
    }

    function getCurrentUserRequest(token) {
      // Returns account information for the current user

      console.log("getCurrentUserRequest(token)", token); // dev

      return {
        method : "GET",
        url : "https://www.bungie.net/Platform/User/GetBungieNetUser/",
        token : token
      }
    }

    function processCurrentUserRequest(response) {
      console.log("processCurrentUserRequest(response)", response); // dev
      if (response.ErrorCode > 1) {
        console.log(response.Message);
      } else {
        console.log(response.Response.user); // dev: log the response for testing
      };

      return response;
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

    getCurrentUser();

  }
  BungieService();
})();
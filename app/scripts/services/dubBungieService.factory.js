(function(){

  dubApp.factory('dubBungieService', BungieService);

   function BungieService() {
    var bungieNetUserPromise = null;

    var factory = {
      getBungieNetUser : getBungieNetUser
    }

    return factory;

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
            console.log("bungled cookie value:", cookies[0].value); // dev
            resolve(cookies[0].value);
          } else {
            reject(alert("Error: No cookies found."));
          };
        }
      });
    }


    /*********************************************************/


    function getBungieNetUser() {
      // Returns account information for the current user

      bungieNetUserPromise = bungieNetUserPromise || getBungieCookies()
        .then(getBungieNetUserRequest)
        .then(apiRequest)
        .then(processBungieNetRequest)
        .catch(function(error) {
          console.log("Failed!", error);
        });

      return bungieNetUserPromise;
    }

    function getBungieNetUserRequest(token) {
      console.log("getBungieNetUserRequest(token)", token); // dev

      return {
        method : "GET",
        url : "https://www.bungie.net/Platform/User/GetBungieNetUser/",
        token : token
      }
    }

    function processBungieNetRequest(response) {
      console.log("processBungieNetRequest(response)", response); // dev
      if (response.ErrorCode > 1) {
        console.log(response.Message);
      } else {
        console.log(response.Response.user); // dev: log the response for testing
      };

      return response;
    }

    function getGuardiansRequest(token) {
      return {
        method : "GET",
        url : "",
        token : token
      }
    }

    function getGuardianInventoryRequest(token, membershipType, membershipId, character) {
      // Returns the inventory for the supplied character.
      return {
        method : "GET",
        url : 'https://bungie.net/Destiny/' + membershipType + '/Account/' + membershipId + '/Character/' + character.id + '/Inventory/',
        token : token
      }
    }
  }
})();
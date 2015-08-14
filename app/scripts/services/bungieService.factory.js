(function(){

  app.factory('bungieService', BungieService);

   function BungieService() {
    var bungieNetUserPromise = null;
    var guardianPromise = null;

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
        })
        .then(generateMembership)
        .then(getGuardians);

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
      };

      return response;
    }

    function generateMembership(response) {
      var userData = response.Response.user;
      var platformId = null;

      if (userData.xboxDisplayName) {
        platformId = 1;
        console.log("Platform: Xbox"); // dev
        handle = userData.xboxDisplayName;
        console.log(handle); // dev
      }

      if (userData.psnDisplayName) {
        platformId = 2;
        console.log("Platform: PlayStation"); // dev
        handle = userData.psnDisplayName;
        console.log(handle); // dev
      }
      console.log("membershipId:",userData.membershipId);

      return {
        handle : handle,
        id : userData.membershipId,
        platform : platformId
      };
    }


    /*********************************************************/


    function getGuardians(membership) {
      console.log(membership); // dev

      guardianPromise = getBungieCookies()
        .then(getGuardiansRequest)
        .then(apiRequest)
        .then(processGuardiansRequest);

      return guardianPromise;
    }

    function getGuardiansRequest(token, membership) {
      console.log(membership); // dev
      console.log("token : " + token + "\n" + "membership : " + membership); // dev
      return {
        method : 'GET',
        url: 'https://www.bungie.net/Platform/User/GetBungieAccount/' + membership.id + '/' + membership.platform + '/',
        token : token
      }
    }

    function processGuardiansRequest(response) {
      console.log(response); // dev
    }

    function generateGuardians(response) {
      var guardianData = response.Response.destinyAccounts.characters;

      return {
        id : guardianId
      }
    }


    /*********************************************************/


    function getInventories() {
      var promise = getBungieCookies()
      .then(getGuardianInventoryRequest)
      .then(apiRequest)
      .then(processGuardianInventory);

      return promise;
    }

    function getGuardianInventoryRequest(token, membership, guardian) {
      console.log("getGuardianInventoryRequest(token)", token); // dev
      // Returns the inventory for the supplied character.
      return {
        method : "GET",
        url : 'https://bungie.net/Destiny/' + membership.type + '/Account/' + membership.id + '/Character/' + guardian.id + '/Inventory/',
        token : token
      }
    }

    function processGuardianInventory(response) {
      console.log("processGuardianInventory(response)", response); // dev

      return response;
    }
  }
})();
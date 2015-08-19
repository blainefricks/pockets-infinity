(function(){

  app.factory('bungieService', BungieService);

  BungieService.$inject = ['$http'];

   function BungieService($http) {
    var bungieNetUserPromise = null;
    var guardianPromise = null;
    var inventoryPromise = null;

    var factoryServices = {
      getBungieNetUser : getBungieNetUser
    }

    return factoryServices;


    /*********************************************************/


    function getBungieCookies() {
      // Gets all Bungie.net cookies from browser, searches for the
      // 'bungled' and 'bungledid' cookies, then returns their values.

      var cookieData = {
        bungled : null,
        bungledid : null
      };

      return new Promise(function(resolve, reject) {
        chrome.cookies.getAll({
          'domain': '.bungie.net'
        }, getAllCallback);

        function getAllCallback(cookies) {
          if (cookies.length > 0) {
            for (var i = 0; i < cookies.length; i++) {
              if (cookies[i].name === "bungled") {
                // set 'bungled' value
                cookieData.bungled = cookies[i].value;
              };
              if (cookies[i].name === "bungledid") {
                // set 'bungledid' value
                cookieData.bungledid = cookies[i].value;
              };
            };
            resolve(cookieData);
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
        .then($http)
        .then(processBungieNetRequest)
        .catch(function(error) {
          console.log("Failed!", error);
        })
        .then(generateMembership)
        .then(getGuardians);

      return bungieNetUserPromise;
    }

    function getBungieNetUserRequest(cookie) {
      console.log("getBungieNetUserRequest(cookie)", cookie); // dev

      return {
        method: "GET",
        url: "https://www.bungie.net/Platform/User/GetBungieNetUser/",
        headers: {
          "X-API-Key": apiKey,
          "X-CSRF": cookie.bungled
        },
        withCredentials: true
      };
    }

    function processBungieNetRequest(response) {
      console.log("processBungieNetRequest(response)", response); // dev
      if (response.data.ErrorCode > 1) {
        console.log(response.data.ErrorStatus + "\n" + response.data.Message);
      };

      return response;
    }

    function generateMembership(response) {
      var userData = response.data.Response.user;
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

      guardianPromise = guardianPromise || getBungieCookies()
        .then(getGuardiansRequest.bind(null, membership))
        .then($http)
        .then(processGuardiansRequest)
        .then(generateGuardians);

      return guardianPromise;
    }

    function getGuardiansRequest(membership, cookie) {
      console.log("cookie : " + cookie + "\n" + "membership : " + membership); // dev

      return {
        method: "GET",
        url: "https://www.bungie.net/Platform/User/GetBungieAccount/" + membership.id + "/" + membership.platform + "/",
        headers : {
          "X-API-Key": apiKey,
          "X-CSRF": cookie.bungled
        },
        withCredentials: true
      }
    }

    function processGuardiansRequest(response) {
      console.log(response); // dev

      return response;
    }

    function generateGuardians(response) {
      var guardianData = response.data.Response.destinyAccounts[0].characters;
      var guardians = [];

      for (var i = 0; i < guardianData.length; i++) {
        console.log("Guardian"+ [i] + ": " + guardianData[i].characterId); // dev
        guardians.push({
          id : guardianData[i].characterId
        });
      };

      console.log(guardians); // dev

      return guardians;
    }


    /*********************************************************/


    function getInventories() {
      inventoryPromise = inventoryPromise || getBungieCookies()
      .then(getGuardianInventoryRequest)
      .then($http)
      .then(processGuardianInventory);

      return inventoryPromise;
    }

    function getGuardianInventoryRequest(cookie, membership, guardian) {
      console.log("getGuardianInventoryRequest(cookie)", cookie); // dev
      // Returns the inventory for the supplied character.

      return {
        method: "GET",
        url: "https://bungie.net/Destiny/" + membership.platform + "/Account/" + membership.id + "/Character/" + guardian.id + "/Inventory/",
        headers: {
          "X-API-Key": apiKey,
          "X-CSRF": cookie.bungled
        },
        withCredentials: true
      }
    }

    function processGuardianInventory(response) {
      console.log("processGuardianInventory(response)", response); // dev

      return response;
    }
  }
})();
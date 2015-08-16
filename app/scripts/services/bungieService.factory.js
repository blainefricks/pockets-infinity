(function(){

  app.factory('bungieService', BungieService);

  BungieService.$inject = ['$http'];

   function BungieService($http) {
    var bungieNetUserPromise = null;
    var guardianPromise = null;

    var factory = {
      getBungieNetUser : getBungieNetUser
    }

    return factory;


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
        .then($http)
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
      if (response.data.ErrorCode > 1) {
        console.log(response.data.Message);
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

      guardianPromise = getBungieCookies()
        .then(getGuardiansRequest.bind(null, membership))
        .then($http)
        .then(processGuardiansRequest)
        .then(generateGuardians);

      return guardianPromise;
    }

    function getGuardiansRequest(membership, token) {
      console.log("token : " + token + "\n" + "membership : " + membership); // dev
      return {
        method: "GET",
        url: "https://www.bungie.net/Platform/User/GetBungieAccount/" + membership.id + "/" + membership.platform + "/",
        headers : {
          "X-API-Key": apiKey,
          "x-crsf": token
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

      for (var i = 0; i < guardianData.length; i++) {
        console.log("Guardian"+ [i] + ": " + guardianData[i].characterId); // dev
      };

      var guardians = [
        {
          id : guardianData
        }
      ];

      return guardians;
    }


    /*********************************************************/


    function getInventories() {
      var promise = getBungieCookies()
      .then(getGuardianInventoryRequest)
      .then($http)
      .then(processGuardianInventory);

      return promise;
    }

    function getGuardianInventoryRequest(token, membership, guardian) {
      console.log("getGuardianInventoryRequest(token)", token); // dev
      // Returns the inventory for the supplied character.
      return {
        method : "GET",
        url : 'https://bungie.net/Destiny/' + membership.platform + '/Account/' + membership.id + '/Character/' + guardian.id + '/Inventory/',
        token : token
      }
    }

    function processGuardianInventory(response) {
      console.log("processGuardianInventory(response)", response); // dev

      return response;
    }
  }
})();
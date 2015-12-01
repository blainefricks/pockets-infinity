(function(){

  app.factory('bungieService', BungieService);

  BungieService.$inject = ['$rootScope', '$http'];

  function BungieService($rootScope, $http) {
    var bungieNetUserPromise = null;
    var guardianPromise = null;
    var inventoryPromise = null;
    var bungieURL = "http://www.bungie.net";

    var factoryServices = {
      getBungieNetUser : getBungieNetUser,
      getGuardians : getGuardians,
      getInventory : getInventory
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
            reject(alert("Error: No cookies found. Please sign into Bungie.net."));
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
      console.log("Cookies: bungled=" + cookie.bungled + "; bungledid=" + cookie.bungledid + ";"); // dev
      // console.log("getBungieNetUserRequest(cookie)", cookie); // dev

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
      // console.log("processBungieNetRequest(response)", response); // dev
      if (response.data.ErrorCode > 1) {
        document.getElementById("error").innerHTML = "<b>" + response.data.ErrorStatus + "</b><br>" + response.data.Message; // 0.1.1
        console.log(response.data.ErrorStatus + "\n" + response.data.Message); // dev
      };

      return response;
    }

    function generateMembership(response) {
      var userData = response.data.Response.user;
      console.log(userData); // dev
      var handle = null;
      var id = null;
      var platformId = null;

      if (userData.xboxDisplayName) {
        platformId = 1;
        console.log("Platform: Xbox"); // dev
        handle = userData.xboxDisplayName;
      }

      if (userData.psnDisplayName) {
        platformId = 2;
        console.log("Platform: PlayStation"); // dev
        handle = userData.psnDisplayName;
      }

      console.log("Gamertag:",handle); // dev
      console.log("Membership ID:",userData.membershipId); // dev

      var _user = [
        {
          handle : handle,
          id : userData.membershipId,
          platform : platformId
        }
      ];

      $rootScope.$broadcast('user-updated', {
        user: _user
      });

      return _user;
    }


    /*********************************************************/


    function getGuardians(membership) {
      console.log(membership); // dev

      guardianPromise = guardianPromise || getBungieCookies()
        .then(getGuardiansRequest.bind(null, membership))
        .then($http)
        .then(processGuardiansRequest)
        .catch(function(error) {
          console.log("Failed!", error);
        })
        .then(generateGuardians);

      return guardianPromise;
    }

    function getGuardiansRequest(membership, cookie) {
      // /{membershipType}/Account/{destinyMembershipId}/Summary/
      console.log(membership); // dev
      console.log("https://www.bungie.net/Platform/Destiny/" + membership.platform + "/Account/" + membership.id + "/Summary/"); // dev

      return {
        method: "GET",
        url: "https://www.bungie.net/Platform/Destiny/" + membership.platform + "/Account/" + membership.id + "/Summary/",
        headers : {
          "X-API-Key": apiKey,
          "X-CSRF": cookie.bungled
        },
        withCredentials: true
      }
    }

    function processGuardiansRequest(response) {
      console.log(response); // dev
      if (response.data.ErrorCode > 1) {
        console.log(response.data.ErrorStatus + "\n" + response.data.Message); // dev
      };

      return response;
    }

    function generateGuardians(response) {
      var guardianData = response.data.Response.destinyAccounts[0].characters;
      var _guardians = [];

      for (var i = 0; i < guardianData.length; i++) {
        console.log("Guardian"+ [i] + ": " + guardianData[i].characterId); // dev
        _guardians.push({
          backgroundPath     : bungieURL + guardianData[i].backgroundPath,
          emblemPath         : bungieURL + guardianData[i].emblemPath,
          characterClass     : guardianData[i].characterClass.className,
          id                 : guardianData[i].characterId,
          dateLastPlayed     : guardianData[i].dateLastPlayed,
          gender             : guardianData[i].gender.genderName,
          light              : guardianData[i].powerLevel,
          level              : guardianData[i].level,
          percentToNextLevel : guardianData[i].percentToNextLevel,
          race               : guardianData[i].race.raceName
        });
      };

      $rootScope.$broadcast('guardians-updated', {
        guardians: _guardians
      });

      return _guardians;
    }


    /*********************************************************/


    function getInventory(membership, guardian) {
      inventoryPromise = inventoryPromise || getBungieCookies()
      .then(getGuardianInventoryRequest)
      .then($http)
      .then(processGuardianInventoryRequest);

      return inventoryPromise;
    }

    function getGuardianInventoryRequest(membership, guardian, cookie) {
      // Retrieve the inventory for the supplied character.
      // http://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Inventory/Summary/

      return {
        method: "GET",
        url: "https://bungie.net/Platform/Destiny/" + membership.platform + "/Account/" + membership.id + "/Character/" + guardian.id + "/Inventory/Summary/",
        headers: {
          "X-API-Key": apiKey,
          "X-CSRF": cookie.bungled
        },
        withCredentials: true
      }
    }

    function processGuardianInventoryRequest(response) {
      console.log(response); // dev

      return response;
    }
  }
})();
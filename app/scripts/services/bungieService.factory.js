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

    function processResponse(response) {
      console.log(response); // dev
      if (response.data.ErrorCode > 1) {
        console.log(response.data.ErrorStatus + '\n' + response.data.Message); // dev
      };

      return response;
    }


    /*********************************************************/


    function getBungieNetUser() {
      // Returns account information for the current user

      bungieNetUserPromise = bungieNetUserPromise || getBungieCookies()
        .then(getBungieNetUserRequest)
        .then($http)
        .then(processResponse)
        .catch(function(error) {
          console.log("Failed!", error);
        })
        .then(generateMembership)
        .then(getDestinyAccount)
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

    function generateMembership(response) {
      var userData = response.data.Response.user;
      console.log(userData); // dev
      var handle = null;
      var membershipId = null;
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

      var _user = {
                    handle : handle,
                    membershipId : userData.membershipId,
                    membershipType : platformId
                  };

      $rootScope.$broadcast('user-updated', {
        user: [_user]
      });

      return _user;
    }


    /*********************************************************/

    function getDestinyAccount(membership) {
      console.log(membership); // dev

      var bungieAccountPromise = bungieAccountPromise || getBungieCookies()
        .then(getDestinyAccountRequest.bind(null, membership))
        .then($http)
        .then(processResponse)
        .catch(function(error) {
          console.log('Failed!', error);
        })
        .then(generateDestinyAccount);

      return bungieAccountPromise;
    }

    function getDestinyAccountRequest(membership, cookie) {
      // http://www.bungie.net/Platform/User/GetBungieAccount/{membershipId}/{membershipType}/
      // Returns the account information for the given membershipId and type, including any exposed BungieNet and Destiny information. Will respect privacy of links based on requesting user for anonymous requests.

      console.log(membership); // dev
      console.log('https://www.bungie.net/Platform/User/GetBungieAccount/' + membership.membershipId + '/' + membership.membershipType + '/'); // dev

      return {
        method: 'GET',
        url: 'https://www.bungie.net/Platform/User/GetBungieAccount/' + membership.membershipId + '/' + membership.membershipType + '/',
        headers: {
          'X-API-Key': apiKey,
          'X-CSRF': cookie.bungled
        }
      };
    }

    function generateDestinyAccount(response) {
      var destinyAccount = response.data.Response.destinyAccounts[0];
      console.log(destinyAccount); // dev

      return destinyAccount;
    }

    /*********************************************************/

    // function getGuardiansRequest(membership, cookie) {
    //   // /{membershipType}/Account/{destinyMembershipId}/Summary/
    //   console.log(membership); // dev
    //   console.log("https://www.bungie.net/Platform/Destiny/" + membership.membershipType + "/Account/" + membership.membershipId + "/Summary/"); // dev

    //   return {
    //     method: "GET",
    //     url: "https://www.bungie.net/Platform/Destiny/" + membership.membershipType + "/Account/" + membership.membershipId + "/Summary/",
    //     headers : {
    //       "X-API-Key": apiKey,
    //       "X-CSRF": cookie.bungled
    //     },
    //     withCredentials: true
    //   }
    // }

    function getGuardians(response) {
      var guardianData = response.characters;
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
      .then(processResponse);

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

  }
})();
(function(){

  app.factory('bungieService', BungieService);

  BungieService.$inject = ['$rootScope', '$http'];

  function BungieService($rootScope, $http) {
    var bungieNetUserPromise = null;
    var guardianPromise = null;
    var inventoryPromise = null;
    var bungieURL = "http://www.bungie.net";

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
      document.getElementById("cookies").innerHTML = "<b>Cookies:</b> <i>bungled</i>=" + cookie.bungled + "; <i>bungledid</i>=" + cookie.bungledid + ";"; // 0.1.1

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
      var handle = null;
      var id = null;
      var platformId = null;

      if (userData.xboxDisplayName) {
        platformId = 1;
        document.getElementById("platform").innerHTML = "<b>Platform:</b> Xbox ("+platformId+")"; // 0.1.1
        console.log("Platform: Xbox"); // dev
        handle = userData.xboxDisplayName;
      }

      if (userData.psnDisplayName) {
        platformId = 2;
        document.getElementById("platform").innerHTML = "<b>Platform:</b> Playstation"; // 0.1.1
        console.log("Platform: PlayStation"); // dev
        handle = userData.psnDisplayName;
      }

      document.getElementById("gamertag").innerHTML = "<b>Gamertag:</b> " + handle; // 0.1.1
      console.log("Gamertag:",handle); // dev
      document.getElementById("membership-id").innerHTML = "<b>Membership ID:</b> " + userData.membershipId; // 0.1.1
      console.log("Membership ID:",userData.membershipId); // dev

      return {
        handle : handle,
        id : userData.membershipId,
        platform : platformId
      };
    }


    /*********************************************************/


    function getGuardians(membership) {
      // console.log(membership); // dev

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
      // console.log("cookie : " + cookie + "\n" + "membership : " + membership); // dev

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
      if (response.data.ErrorCode > 1) {
        document.getElementById("error").innerHTML = "<b>" + response.data.ErrorStatus + "</b><br>" + response.data.Message; // 0.1.1
        console.log(response.data.ErrorStatus + "\n" + response.data.Message); // dev
      };

      return response;
    }

    function generateGuardians(response) {
      var guardianData = response.data.Response.destinyAccounts[0].characters;
      var guardians = [];

      for (var i = 0; i < guardianData.length; i++) {
        document.getElementById("guardian"+[i]+"-id").innerHTML = "<b>Guardian"+ [i] + ":</b> " + guardianData[i].characterId; // 0.1.1
        console.log("Guardian"+ [i] + ": " + guardianData[i].characterId); // dev
        guardians.push({
          backgroundPath     : bungieURL + guardianData[i].backgroundPath,
          emblemPath         : bungieURL + guardianData[i].emblemPath,
          characterClass     : guardianData[i].characterClass.className,
          id                 : guardianData[i].characterId,
          dateLastPlayed     : guardianData[i].dateLastPlayed,
          gender             : guardianData[i].gender.genderName,
          level              : guardianData[i].level,
          percentToNextLevel : guardianData[i].percentToNextLevel,
          race               : guardianData[i].race.raceName
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
      .then(processGuardianInventoryRequest);

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

    function processGuardianInventoryRequest(response) {
      console.log("processGuardianInventory(response)", response); // dev

      return response;
    }
  }
})();
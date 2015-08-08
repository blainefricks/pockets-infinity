(function(){

  dubApp.factory('dubBungieService', BungieService);

   function BungieService() {


    // function apiRequest (method, url, token, request) {
    //   var xhr = new XMLHttpRequest();

    //   xhr.open(method, url, true);
    //   xhr.setRequestHeader("X-API-Key", apiKey, "X-CSRF", token);

    //   xhr.onreadystatechange = function(){
    //     if (this.readyState === 4 && this.status === 200) {
    //       var json = JSON.parse(this.responseText);
    //       if (json.ErrorCode > 1) {
    //         alert("Error: " + json.ErrorStatus + "\n" + json.Message);
    //         console.log(json); // dev: log error
    //       } else {
    //         console.log(json.request); // dev: log response
    //       };
    //     };
    //   }

    //   xhr.send();
    // }

    function apiRequest(method, url, token) {
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.setRequestHeader("X-API-Key", apiKey, "X-CSRF", token);

        xhr.onreadystatechange = function() {
          var json = JSON.parse(this.responseText);
          resolve(response);
          reject(console.log("apiRequestPromise is rejected;"));
          alert("test");
        }
      });
    }


    /*********************************************************/


    function getBungieCookies(callback) {
      return new Promise(function(resolve, reject) {
        chrome.cookies.getAll({
          'domain': '.bungie.net',
          'name': 'bungled'
        }, getAllCallback);

        function getAllCallback(cookies) {
          if (cookies.length > 0) {
            resolve(cookies[0].value);
            console.log(cookies[0].value); // dev-note: Bungled Cookie Value
          } else{
            reject(alert("Error: No cookies found."));
          };
        }
      });
    }

    getBungieCookies(getCurrentUserRequest);


    /*********************************************************/


    function getCurrentUserRequest(token) {
      // Returns account information for the current user
      alert("getCurrentUserRequest");
      apiRequest("GET", "https://www.bungie.net/Platform/User/GetBungieNetUser/", token)
        .then(function(json) {
          console.log(json.Response.user.membershipId);
        });
    }

    function getGuardiansRequest(token) {
      apiRequest("GET", "",token, request)
        .then(function(json) {
          console.log(json.Response);
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
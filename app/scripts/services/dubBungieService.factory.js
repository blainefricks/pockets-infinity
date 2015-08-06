(function(){

  dubApp.factory('dubBungieService', BungieService);

   function BungieService() {

      var xhr = new XMLHttpRequest();


    /*********************************************************/


    function getBungieCookies(callback) {
      return chrome.cookies.getAll({
        'domain' : '.bungie.net',
        'name' : 'bungled'
      }, getAllCallback.bind(this, callback));

      function getAllCallback(callback, cookies) {
        if (cookies.length > 0) {
          callback(cookies[0].value);
        } else{
          alert("Error: No cookies found.");
        };
      };
    };

    getBungieCookies(getCurrentUserRequest);


    /*********************************************************/


    function getCurrentUserRequest(bungledCookieValue) {
      console.log(bungledCookieValue); // dev

      xhr.open(
        "GET",
        "https://www.bungie.net/Platform/User/Getbungienetuser/",
        true);
      xhr.setRequestHeader("X-API-Key", apiKey, "X-CSRF", bungledCookieValue);

      xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
          var json = JSON.parse(this.responseText);
          if (json.ErrorCode > 1) {
            alert("Please log in to bungie.net.");
          } else{};
          console.log(json);
        };
      }

      xhr.send();
    }

    function function_name (argument) {
      // body...
    }

    function getGuardiansRequest(bungledCookieValue) {
      return {
        method: 'GET',
        url: '',
        headers: {
          'X-API-Key': apiKey,
          'x-csrf': bungledCookieValue
        }
      };
    }

    function getGuardianInventoryRequest(bungledCookieValue, membershipType, membershipId, character) {
      // Returns the inventory for the supplied character.
      return {
        method: 'GET',
        url: 'https://bungie.net/Destiny/' + membershipType + '/Account/' + membershipId + '/Character/' + character.id + '/Inventory/',
        headers: {
          'X-API-Key': apiKey,
          'x-csrf': bungledCookieValue
        }
      };
    }
  }
  BungieService();
})();
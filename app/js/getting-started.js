var apiKey = "YOUR_API_KEY_HERE";

var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/",
  true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
  if (this.readyState === 4 && this.status === 200) {
    var json = JSON.parse(this.responseText);
    document.getElementById("itemName").innerHTML = json.Response.data.inventoryItem.itemName;
    document.getElementById("itemDescription").innerHTML = json.Response.data.inventoryItem.itemDescription;
  };
}

xhr.send();
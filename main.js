var treehouseContainer = document.getElementById("container");
var totalPoints = document.getElementById("points");

function makeDom(xhrData) {
  var newBadge = "";
  var currentBadge;
    for (var i = 0; i < xhrData.badges.length; i++) {
      currentBadge = xhrData.badges[i];

      newBadge += `<div class="col-sm-6 col-md-4" badgeContainer>`
      newBadge += `<div class="thumbnail">`
      newBadge += `<img src="${currentBadge.icon_url}" alt="${currentBadge.name}">`
      newBadge += `<div class="caption">`
      newBadge += `<h5>${currentBadge.name}</h5>`
      newBadge += `<p>Date Achieved: ${currentBadge.earned_date}</p>`
      newBadge += `</div></div></div>`

      treehouseContainer.innerHTML = newBadge;
      console.log(xhrData.badges[0].icon_url);
    }
}





function executeThisCodeAfterFileLoads() {
  var data = JSON.parse(this.responseText)
  console.log("data", data)
  makeDom(data)
}

function executeThisCodeAfterFileFails() {
  // console.log("OH NOOOOOO")
}




var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/jamesgill5.json");
myRequest.send()


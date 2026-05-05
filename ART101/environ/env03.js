let environmentTitle = "Memory Chip of the World";

let environmentElements = ["art", "signage", "electric walls", "watching eyes"];


let count = 0;
let mainEntity = {
    name: "Watching Eyes",
    type: "big pupils",
    mood: "skeptical",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

let environmentRules = [
    "Stay Aware At All Times",
    "Cover Up Your Tracks",
    "Remember This Isn't The Real World",
    "Don't Stare Into The Eyes"
]

let avoidImages = [
    "eyes elec.jpg",
    "white wire head.jpg",
    "wire head.jpg",
    "wires.jpg"
]

$("#rules-button").click(function () {
  let message = "<div class='rules-box'><h3>Environment Rules:</h3>";

  for (let i = 0; i < environmentRules.length; i++) {
    message += "<div class='rule-item'>" + (i + 1) + ". " + environmentRules[i] + "</div>";
  }

  message += "</div>";

  $("#output").append(message);
});


$("#avoid-button").click(function () {
  let message = "<div class='avoid-box'><h3>What To Avoid</h3>";

  for (let i = 0; i < avoidImages.length; i++) {
    message += "<img src='" + avoidImages[i] + "' class='avoid-img'>";
  }

  message += "</div>";

  $("#output").append(message);
});

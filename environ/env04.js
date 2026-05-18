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
    "eyeselec.jpg",
    "white wire head.jpg",
    "wire head.jpg",
    "wires.jpg"
]

$("#rules-button").click(function () {
    if ($(".rules-box").length) {
        $(".rules-box").remove();
        return;
    }
  let message = "<div class='rules-box'><h3>Environment Rules:</h3>";

  for (let i = 0; i < environmentRules.length; i++) {
    message += "<div class='rule-item'>" + (i + 1) + ". " + environmentRules[i] + "</div>";
  }

  message += "</div>";

  $("#output").append(message);
});


$("#avoid-button").click(function () {

    if ($(".avoid-box").length) {
        $(".avoid-box").remove();
        return;
    }
  let message = "<div class='avoid-box'><h3>What To Avoid</h3>";

  for (let i = 0; i < avoidImages.length; i++) {
    message += "<img src='" + avoidImages[i] + "' class='avoid-img'>";
  }

  message += "</div>";

  $("#output").append(message);
});

let phrases = [
  "Penance, penance, penance. Pray for sinners",
  "The Immaculate will conquer, through us, the whole world and every single soul",
  "The rosary is the weapon for these times.",
  "The Mother asks not for perfection, only openness."
];

let phraseIndex = 0;
let typing = null;

$("#saint-image").click(function () {

  clearInterval(typing);

  if (phraseIndex >= phrases.length) {
    $(".text-box").hide();
    phraseIndex = 0;
    return;
  }

  $(".text-box").show();

  let currentPhrase = phrases[phraseIndex];

  $(".text-box").text("");

  let i = 0;

  typing = setInterval(function () {

    $(".text-box").append(currentPhrase[i]);

    i++;

    if (i >= currentPhrase.length) {
      clearInterval(typing);
    }

  }, 50);

  phraseIndex++;

});

let tokenFollowing = false;

$("#token").click(function () {

  tokenFollowing = !tokenFollowing;

});

$(document).mousemove(function (event) {

  if (tokenFollowing) {

    $("#token").css({
      position: "absolute",
      left: event.pageX + "px",
      top: event.pageY + "px"
    });

    let token = $("#token");
    let computer = $("#computer");

    let tokenOffset = token.offset();
    let computerOffset = computer.offset();

    let touching =
      tokenOffset.left < computerOffset.left + computer.width() &&
      tokenOffset.left + token.width() > computerOffset.left &&
      tokenOffset.top < computerOffset.top + computer.height() &&
      tokenOffset.top + token.height() > computerOffset.top;

    if (touching) {

      tokenFollowing = false;

      token.animate({
        left: computerOffset.left + 80,
        top: computerOffset.top + 80,
        width: "20px",
        opacity: 0
      }, 500);

    }

  }

});
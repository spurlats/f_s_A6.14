const numDivs = 36;
const maxHits = 10;

let hits = 0;
let miss = 0;
let firstHitTime = 0;

$("#button-start").click(function() {
  round();
  $(".game-field").click(handleClick);
  firstHitTime = getTimestamp();
  $("#button-start").addClass("hide");
})


function round() {
  $(clear());
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(".target").text(hits+1);

  if (hits === maxHits) {
    endGame();
  }
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  } 
  else {
    $(event.target).addClass('miss'); 
    miss = miss + 1;
    console.log(miss);
  }
}

function clear() {
  $(".target").text(" ");
  $(".target").removeClass("target");
  $(".target").removeClass("miss");
  $(".miss").removeClass("miss");
}

function endGame() {
  $(".slots").addClass("hide");
  let lastHitTime = getTimestamp()
  let totalPlayedMillis = lastHitTime - firstHitTime;
  let totalPlayedSeconds = totalPlayedMillis / 1000;
  $("#total-time-played").text(totalPlayedSeconds);
  $("#total-miss").text(miss);
  $("#win-message").removeClass("d-none");
}

function init() {
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);

const scoreOne = document.getElementById("score-one");
const scoreTwo = document.getElementById("score-two");

let homeScore = 0;
let guestScore = 0;
function homePlusOne() {
  homeScore += 1;
  scoreOne.textContent = homeScore;
  lead();
}
function homePlusTwo() {
  homeScore += 2;
  scoreOne.textContent = homeScore;
  lead();
}
function homePlusThree() {
  homeScore += 3;
  scoreOne.textContent = homeScore;
  lead();
}
function guestPlusOne() {
  guestScore += 1;
  scoreTwo.textContent = guestScore;
  lead();
}
function guestPlusTwo() {
  guestScore += 2;
  scoreTwo.textContent = guestScore;
  lead();
}
function guestPlusThree() {
  guestScore += 3;
  scoreTwo.textContent = guestScore;
  lead();
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  scoreOne.textContent = homeScore;
  scoreTwo.textContent = guestScore;
  homeName.style.color = "white";
  guestName.style.color = "white";
}

const homeName = document.getElementById("home-name");
const guestName = document.getElementById("guest-name");

function lead() {
  if (homeScore > guestScore) {
    homeName.style.color = "green";
    guestName.style.color = "red";
  } else if (guestScore > homeScore) {
    homeName.style.color = "red";
    guestName.style.color = "green";
  } else {
    homeName.style.color = "yellow";
    guestName.style.color = "yellow";
  }
}

let homeScoreDisplay = document.querySelector(".score-display-home");
let awayScoreDisplay = document.querySelector(".score-display-away");

// selecting the parent elements
const homeTeam = document.querySelector(".home");
const awayTeam = document.querySelector(".away");

// console.log(homeTeam, awayTeam);

// children element
const homeButtons = homeTeam.querySelectorAll("button");
const awayButtons = awayTeam.querySelectorAll("button");

// console.log(homeButtons, awayButtons);

// starting values
let homeScore = 0;
let awayScore = 0;

homeButtons.forEach((clicked) => {
  clicked.addEventListener("click", function () {
    if (clicked.classList.contains("1")) {
      homeScore += 1;
      homeScoreDisplay.textContent = homeScore;
    } else if (clicked.classList.contains("2")) {
      homeScore += 2;
      homeScoreDisplay.textContent = homeScore;
    } else {
      homeScore += 3;
      homeScoreDisplay.textContent = homeScore;
    }
  });
});

awayButtons.forEach((clicked) => {
  clicked.addEventListener("click", function () {
    if (clicked.classList.contains("1")) {
      awayScore += 1;
      awayScoreDisplay.textContent = awayScore;
    } else if (clicked.classList.contains("2")) {
      awayScore += 2;
      awayScoreDisplay.textContent = awayScore;
    } else {
      awayScore += 3;
      awayScoreDisplay.textContent = awayScore;
    }
  });
});

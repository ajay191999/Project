function rollDice() {
  var randomNumber1;
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImgsrc1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomImgsrc1);

  var randomNumber2;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImgsrc2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomImgsrc2);
  condition();

  function condition() {
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🎲Player 1 Won !!!";
    } else if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "🤣It's a Tie, Rematch!!!";
    } else {
      document.querySelector("h1").innerHTML = "🎲Player 2 Won !!!";
    }
    forms();
  }
}

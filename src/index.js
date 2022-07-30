import "./styles.css";

function init() {
  const submitBtn = document.getElementById("submit-guess");
  const resetBtn = document.getElementById("restart-game");
  const hint = document.getElementById("hint");
  const userGuess = document.getElementById("userGuess");

  let numberToBeGuessed = Math.floor(Math.random() * 100) + 1;
  const moves = 7;
  let currMoves = 0;

  function resetFun() {
    currMoves = 0;
    hint.innerHTML = "";
    userGuess.value = "";
    numberToBeGuessed = Math.floor(Math.random() * 100) + 1;
  }

  function submitFun() {
    const val = userGuess.value;
    let hintText = "";
    if (!val.isNaN && currMoves < moves) {
      if (val > numberToBeGuessed) {
        hintText = "Too High!";
      } else if (val < numberToBeGuessed) {
        hintText = "Too Low!";
      } else {
        hintText = `Congrats! you Guessed it right in ${currMoves} steps:)`;
      }

      hint.textContent = hintText;
      currMoves++;
      userGuess.value = "";
    } else if (currMoves > moves) {
      hint.textContent = "yoh have exhausted all the moves! :(  ";
    }
  }

  submitBtn.addEventListener("click", submitFun);
  resetBtn.addEventListener("click", resetFun);
}

init();

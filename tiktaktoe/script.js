/* Tik tak toe feld */
let tiktaktoe = document.querySelector(".start-game");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");

let isPressed = false;
let player1 = true;
let isWon = false;
let arrayTie = [];

function createOneTickTackToeBox(index) {
  let button = document.createElement("button");
  button.setAttribute("class", "field" + index);
  document.querySelector(".tik-tak-toe").appendChild(button);
  button.addEventListener("click", pressed(button));
}

function pressed(button) {
  button.onclick = function () {
    if (button.innerText === "") {
      if (player1 === true && !isWon) {
        button.innerText = "X";
        player1 = false;
        arrayTie.push("X");
        console.log({ array: arrayTie });
        if (isDone() === true) {
          isWon = true;
          console.log({ player1: isWon });
        }
      } else if (player1 === false && !isWon) {
        button.innerText = "O";
        player1 = true;
        arrayTie.push("O");
        console.log({ array: arrayTie });
        if (isDone() === true) {
          isWon = true;
          console.log({ player2: isWon });
        }
      }
    }
  };
}

function isDone() {
  if (
    (document.querySelector(".field1").innerText === "X" &&
      document.querySelector(".field2").innerText === "X" &&
      document.querySelector(".field3").innerText === "X") ||
    (document.querySelector(".field4").innerText === "X" &&
      document.querySelector(".field5").innerText === "X" &&
      document.querySelector(".field6").innerText === "X") ||
    (document.querySelector(".field7").innerText === "X" &&
      document.querySelector(".field8").innerText === "X" &&
      document.querySelector(".field9").innerText === "X") ||
    (document.querySelector(".field1").innerText === "X" &&
      document.querySelector(".field4").innerText === "X" &&
      document.querySelector(".field7").innerText === "X") ||
    (document.querySelector(".field2").innerText === "X" &&
      document.querySelector(".field5").innerText === "X" &&
      document.querySelector(".field8").innerText === "X") ||
    (document.querySelector(".field3").innerText === "X" &&
      document.querySelector(".field6").innerText === "X" &&
      document.querySelector(".field9").innerText === "X") ||
    (document.querySelector(".field1").innerText === "X" &&
      document.querySelector(".field5").innerText === "X" &&
      document.querySelector(".field9").innerText === "X") ||
    (document.querySelector(".field3").innerText === "X" &&
      document.querySelector(".field5").innerText === "X" &&
      document.querySelector(".field7").innerText === "X")
  ) {
    result.innerText = "Player1 has won!";
    return true;
  } else if (
    (document.querySelector(".field1").innerText === "O" &&
      document.querySelector(".field2").innerText === "O" &&
      document.querySelector(".field3").innerText === "O") ||
    (document.querySelector(".field4").innerText === "O" &&
      document.querySelector(".field5").innerText === "O" &&
      document.querySelector(".field6").innerText === "O") ||
    (document.querySelector(".field7").innerText === "O" &&
      document.querySelector(".field8").innerText === "O" &&
      document.querySelector(".field9").innerText === "O") ||
    (document.querySelector(".field1").innerText === "O" &&
      document.querySelector(".field4").innerText === "O" &&
      document.querySelector(".field7").innerText === "O") ||
    (document.querySelector(".field2").innerText === "O" &&
      document.querySelector(".field5").innerText === "O" &&
      document.querySelector(".field8").innerText === "O") ||
    (document.querySelector(".field3").innerText === "O" &&
      document.querySelector(".field6").innerText === "O" &&
      document.querySelector(".field9").innerText === "O") ||
    (document.querySelector(".field1").innerText === "O" &&
      document.querySelector(".field5").innerText === "O" &&
      document.querySelector(".field9").innerText === "O") ||
    (document.querySelector(".field3").innerText === "O" &&
      document.querySelector(".field5").innerText === "O" &&
      document.querySelector(".field7").innerText === "O")
  ) {
    result.innerText = "Player2 has won!";
    return true;
  } else if (arrayTie.length === 9 && !isWon) {
    result.innerText = "It is a Tie";
    return true;
  } else {
    return false;
  }
}

tiktaktoe.onclick = function () {
  if (isPressed === false) {
    for (let i = 1; i < 10; i++) {
      createOneTickTackToeBox(i);
    }
    isPressed = true;
  }
};
reset.onclick = function () {
  isWon = false;
  player1 = true;
  isPressed = false;
  result.innerText = "Winner will be:";

  for (let i = 0; i < 9; i++) {
    arrayTie[i].pop();
    document.querySelector(".field1").innerText = "";
    document.querySelector(".field2").innerText = "";
    document.querySelector(".field3").innerText = "";
    document.querySelector(".field4").innerText = "";
    document.querySelector(".field5").innerText = "";
    document.querySelector(".field6").innerText = "";
    document.querySelector(".field7").innerText = "";
    document.querySelector(".field8").innerText = "";
    document.querySelector(".field9").innerText = "";
  }
};

/* resetfield.onclick = function () {
  let tttButton = document.querySelector(".TTT");
  ispressed = false;
  for (let i = 0; i < tttButton.length; i++) {}
}; */

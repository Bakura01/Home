/* Aufgabe 31 */
let gleich = document.querySelector(".istgleich");
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");
let b0 = document.querySelector(".b0");
let plu = document.querySelector(".plus");
let min = document.querySelector(".minus");
let mal = document.querySelector(".mal");
let div = document.querySelector(".geteilt");
let reset = document.querySelector(".reset");
let ans = document.querySelector(".ans");
let komma = document.querySelector(".komma");
let modulo = document.querySelector(".modulo");
let hoch = document.querySelector(".hoch");

let isfertig = false;
let modeon = false;
let output = document.querySelector(".output");
let input = document.querySelector(".input");
let Zustand2 = false;
let value = "";
input.value = value;
let operator1done = false;
let result = 0;

function taschenrechner(rechnung) {
  console.log(rechnung);
  let operator1done = false;
  let operator2 = "";
  let mode = "";
  let operator1 = "";

  for (let i = 0; i < rechnung.length; i++) {
    console.log({ operator1done: operator1done, display: rechnung[i] });

    if (!operator1done) {
      if (
        rechnung[i] === "+" ||
        rechnung[i] === "-" ||
        rechnung[i] === "*" ||
        rechnung[i] === "/" ||
        rechnung[i] === "^" ||
        rechnung[i] === "%"
      ) {
        mode = rechnung[i];
        operator1done = true;
        console.log({ mode: mode });
      } else if (rechnung[i] === "=") {
        input.value = input.value + operator1;
      } else {
        operator1 = operator1 + (rechnung[i] + "");
        console.log({ operator1: operator1, operator1done: operator1done });
      }
    } else if (operator1done && rechnung[i] !== "=") {
      operator2 = operator2 + (rechnung[i] + "");
      console.log({ operator2: operator2 });
    } else if (operator1done && rechnung[i] === "=") {
      switch (mode) {
        case "+":
          result = +operator1 + +operator2;

          input.value = input.value + result;
          break;
        case "-":
          result = +operator1 - +operator2;

          input.value = input.value + result;
          break;
        case "*":
          result = +operator1 * +operator2;

          input.value = input.value + result;
          break;
        case "/":
          result = +operator1 / +operator2;

          input.value = input.value + result;
          break;
        case "%":
          result = +operator1 % +operator2;

          input.value = input.value + result;
          break;
        case "^":
          result = Math.pow(operator1, operator2);

          input.value = input.value + result;
          break;

        default:
          input.value = input.value + "Error";
          break;
      }
    }
  }
}

reset.onclick = function () {
  input.value = "";

  console.log({ input: input.value });
  operator1done = false;
  modeon = false;
};
ans.onclick = function () {
  input.value = result;
  console.log(result);
  operator1done = false;
  modeon = false;
};
komma.onclick = function () {
  input.value = input.value + ".";
};
hoch.onclick = function () {
  input.value = input.value + "^";
};
modulo.onclick = function () {
  input.value = input.value + "%";
};
b1.onclick = function () {
  input.value = input.value + "1";
};
b2.onclick = function () {
  input.value = input.value + "2";
};
b3.onclick = function () {
  input.value = input.value + "3";
};
b4.onclick = function () {
  input.value = input.value + "4";
};
b5.onclick = function () {
  input.value = input.value + "5";
};
b6.onclick = function () {
  input.value = input.value + "6";
};
b7.onclick = function () {
  input.value = input.value + "7";
};
b8.onclick = function () {
  input.value = input.value + "8";
};
b9.onclick = function () {
  input.value = input.value + "9";
};
b0.onclick = function () {
  input.value = input.value + "0";
};

plu.onclick = function () {
  if (modeon === false && input.value !== "" && input.value !== "=") {
    input.value = input.value + "+";
    modeon = true;
  }
};
min.onclick = function () {
  if (modeon === false && input.value !== "" && input.value !== "=") {
    input.value = input.value + "-";
    modeon = true;
  }
};
div.onclick = function () {
  if (modeon === false) {
    input.value = input.value + "/";
    modeon = true;
  }
};
mal.onclick = function () {
  if (modeon === false) {
    input.value = input.value + "*";
    modeon = true;
  }
};
gleich.onclick = function () {
  input.value = input.value + "=";
  taschenrechner(document.querySelector(".input").value);
};
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    input.value = input.value + "=";
    taschenrechner(document.querySelector(".input").value);
  }
});
function isnumber(number) {
  if (
    number === "0" ||
    "1" ||
    "2" ||
    "3" ||
    "4" ||
    "5" ||
    "6" ||
    "7" ||
    "8" ||
    "9"
  ) {
    return true;
  } else {
    return false;
  }
}

function isletter(string, index) {
  switch (string[index]) {
    case "A":
      isRight = true;
      break;
    case "B":
      isRight = true;

      break;
    case "C":
      isRight = true;

      break;
    case "D":
      isRight = true;
      break;
    case "E":
      isRight = true;
      break;
    case "F":
      isRight = true;
      break;
    case "G":
      isRight = true;
      break;
    case "H":
      isRight = true;
      break;
    case "I":
      isRight = true;
      break;
    case "J":
      isRight = true;
      break;
    case "K":
      isRight = true;
      break;
    case "L":
      isRight = true;
      break;
    case "M":
      isRight = true;
      break;
    case "N":
      isRight = true;
      break;
    case "O":
      isRight = true;
      break;
    case "P":
      isRight = true;
      break;
    case "Q":
      isRight = true;
      break;
    case "R":
      isRight = true;
      break;
    case "S":
      isRight = true;
      break;
    case "T":
      isRight = true;
      break;
    case "U":
      isRight = true;
      break;
    case "V":
      isRight = true;
      break;
    case "W":
      isRight = true;
      break;
    case "X":
      isRight = true;
      break;
    case "Y":
      isRight = true;
      break;
    case "Z":
      isRight = true;
      break;
    case "a":
      isRight = true;

      break;
    case "b":
      isRight = true;

      break;
    case "c":
      isRight = true;

      break;
    case "d":
      isRight = true;
      break;
    case "e":
      isRight = true;
      break;
    case "f":
      isRight = true;
      break;
    case "g":
      isRight = true;
      break;
    case "h":
      isRight = true;
      break;
    case "i":
      isRight = true;
      break;
    case "j":
      isRight = true;
      break;
    case "k":
      isRight = true;
      break;
    case "l":
      isRight = true;
      break;
    case "m":
      isRight = true;
      break;
    case "n":
      isRight = true;
      break;
    case "o":
      isRight = true;
      break;
    case "p":
      isRight = true;
      break;
    case "q":
      isRight = true;
      break;
    case "r":
      isRight = true;
      break;
    case "s":
      isRight = true;
      break;
    case "t":
      isRight = true;
      break;
    case "u":
      isRight = true;
      break;
    case "v":
      isRight = true;
      break;
    case "w":
      isRight = true;
      break;
    case "x":
      isRight = true;
      break;
    case "y":
      isRight = true;
      break;
    case "z":
      isRight = true;
      break;
    default:
      isright = false;
      break;
  }
  if (isright === true) {
    return true;
  } else {
    return false;
  }
}

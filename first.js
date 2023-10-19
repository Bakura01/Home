/* Taschenrechner test
let n1 = prompt("First number");
let mode = prompt("+,-,*,/");
let n2 = prompt("Second number");
let result;
parseFloat(n1);
parseFloat(n2);
if (mode == "+") {
  result = parseFloat(n1) + parseFloat(n2);
  alert(result);
} else if (mode == "-") {
  result = parseFloat(n1) - parseFloat(n2);
  alert(result);
} else if (mode == "*") {
  result = parseFloat(n1) * parseFloat(n2);
  alert(result);
} else if (mode == "/") {
  result = parseFloat(n1) / parseFloat(n2);
  alert(result);
}
*/
/*
let h2 = document.querySelector(".h2");

function taschenrechner(n1, mode, n2) {
  if (mode == "+") {
    result = parseFloat(n1) + parseFloat(n2);
    h2.innerText = result;
  } else if (mode == "-") {
    result = parseFloat(n1) - parseFloat(n2);
    h2.innerText = result;
  } else if (mode == "*") {
    result = parseFloat(n1) * parseFloat(n2);
    h2.innerText = result;
  } else if (mode == "/") {
    result = parseFloat(n1) / parseFloat(n2);
    h2.innerText = result;
  }
}

taschenrechner(prompt("Number1"), prompt("+,-,/,*"), prompt("Number2"));

function read(input) {
  for (let index = 0; index < input.length; index++) {}
}
/*
/* aufgabe 11 */
/* let a = true,
  b = true;
if (a && b) {
  console.log("Condition is true");
}
if (a || b) {
  console.log("Condition is true");
}
if (!a && b) {
  console.log("Condition is true");
}
if (!a || b) {
  console.log("Condition is true");
}
if (!a && !b) {
  console.log("Condition is true");
}
if (!a || !b) {
  console.log("Condition is true");
}
 
Aufgabe 12 */
/*
for (let i; i <= 6; i++) {
  alert("The current step is " + i);
}
/* Aufgabe 13  
let step = 1;
while (step < 6) {
  switch (step) {
    case 1:
      console.log("The current step is 1");
      step++;
      break;
    case 2:
      console.log("The current step is 2");
      step++;
      break;
    case 3:
      console.log("The current step is 3");
      step++;
      break;
    case 4:
      console.log("The current step is 4");
      step++;
      break;
    case 5:
      console.log("The current step is 5");
      step++;
      break;
    case 6:
      console.log("The current step is 6");
      step++;
      break;
    default:
      console.log("The current step is undefined");
      break;
  }
}
/* Aufgabe 14 +15 */
/* 
function sum(a, b) {
  return a + b;
}
console.log(sum(+prompt(), +prompt()));
 */
/* aufgabe 16 
let a = 10;

function double(x) {
  /* local scope *
const b = x; /* z.b 1 *
return b * 2; /* 2 /
}

if (double(6) > 10) {
  /* global scope *
  alert("This is a: " + a); /* 10 /
  alert("This is b: " + b); /* 6 /
  let b = a; /* 10 *
  if (b >= a) {
    let c = a + b; /* 20 *
  } else {
    let c = a + b; /* 20 *
  }
  alert("This is c: " + c); /* 20 *
}
alert("This is b: " + b); /* 10 *

/* aufgabe 17 *
let i = 0;
while (i < 200) {
  i += 10;
  console.log(i);
}

/* aufgabe 18 *
for (let i = 0; i < 200; i += 10) {
  console.log(i);
}


/* aufgabe 19 */
/* let rechteck = document.querySelector(".rechteck");
let string = "";
for (let s = 0; s < 8; s++) {
  for (let l = 0; l < 8; l++) {
    string = string + "* ";
    rechteck.innerText = string;
  }

  string = string + "\n";
} */

/* Aufgabe 21 Bosch email testen*/

/* Test mit Zuständen */

/* 
let string = "Peter.Mayer4@de.bosch.com";
let isRight = true;
let Zustand = "Z1";
let index = 0;
let string2 = "";

switch (Zustand) {
  case Z1:
    if (string.slice(index, index) !== ".") {
      if (isletter(index, index) === true) {
        Zustand = Z1;
      }
    } else if (string.slice(index, index) === ".") {
      Zustand = Z2;
    } else {
      Zustand = Z0;
    }
    index++;
    break;

  case Z2:
    if (string.slice(index, index) !== number) {
      if (isnumber(index, index) === true) {
        Zustand = Z2;
      }
    } else if (string.slice(index, index) === "@") {
      Zustand = Z3;
    } else {
      Zustand = Z0;
    }
    break;
  case Z3:
    for (let i = 0; i < 2; i++) {
      string2 = string.slice(index, index);
      index++;
    }

    break;
  case Z0:
    break;
}

function isletter(index, index) {
  switch (string.slice(index, index)) {
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

function isnumber(index, index) {
  if (string.slice(index, index) === number) {
    return true;
  } else {
    return false;
  }
}
 */

/* Aufgabe 22 */
/* let zeit = new Date();
let day = zeit.getDate();
let month = zeit.getMonth();
let year = zeit.getFullYear();

console.log(day + "." + month + "." + year); */

/* Aufgabe 23 */
/* let array = [110, 120, 130, 140, 150];
let result = 0;
let arrayL = array.length;
for (let i = 0; i < arrayL; i++) {
  result = result + array.pop();
  console.log(result);
  console.log(array);
} */

/* Aufgabe 25 */
/* const array = [];
let counter = 1;
for (let i = 0; i < 3; i++) {
  array.push([]);
  for (let j = 0; j < 3; j++) {
    array[i].push(counter);
    counter++;
  }
}
console.log(array); */

/*regex aufgabe  */
/* let myRe = /^([A-z])+\.([A-z])+\d?@de\.bosch\.com/;
/* Anfang string^ [alphabet] + punkt [alphabet]+ ziffer?möglich @de punkt bosch punkt com ende / */

/* let email = prompt("Enter your email");
if (myRe.test(email)) {
  document.getElementById("output").innerText = "email valid";
} else {
  document.getElementById("output").innerText = "email invalid";
} 
*/
/*Aufagabe 26*/
/* function averageGrade(classCount) {
  let total = 0;
  let gradeCounter = 1;
  let classAverage = 0;
  while (gradeCounter <= classCount) {
    total = total + +prompt();
    gradeCounter++;
  }
  console.log((classAverage = total / classCount));
}

averageGrade(+prompt());
*/

/* Aufgabe 27 */
/* let element = document.querySelector(".text");
element.style.color = "white";
element.style.backgroundColor = "blue"; */

/* Aufgabe 28 */
/* let element = document.querySelector(".text");
element.onclick = function () {
  element.style.color = "white";
  element.style.backgroundColor = "blue";
};
*/
/* Aufgabe 29 */
/*  let mouse = document.querySelector(".ueberschrift");
mouse.onmouseover = function () {
  mouse.innerText = "General Kenobi";
};
mouse.onmouseout = function () {
  mouse.innerText = "Hello There";
};  */
/* Sternchen Pyramide umgedreht */
/* let pyramide = document.querySelector(".text");
let string = " ";
let maxV = prompt();
for (let s = maxV; s > 0; s--) {
  /* tausche maxV mit 0 zähle s runter und vergleiche um */

/* for (let space = 0; space < maxV - 1 - s; space++) {
    string = string + "\xa0";
  }
  for (let l = 0; l < s; l++) {
    string = string + "*";
    pyramide.innerText = string;
  }
  string = string + "\n";
}  */
/* Aufgabe 30 Debugging */
/* function firstFunction() {
  secondFunction();
}

function secondFunction() {
  thirdFunction();
}

function thirdFunction() {
  forthFunction();
}

function forthFunction() {
  headline.innerText = "Headline clicked";
}

//grab headline Element
let headline = document.querySelector(".headline");

//add headline click event
headline.onclick = function () {
  firstFunction();
}; */

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

let isfertig = false;
let modeon = false;
let output = document.querySelector(".output");
let input = document.querySelector(".input");
let Zustand2 = false;
let value = "";
input.value = value;

let n2 = 0;
let mode = 0;
let n1 = 0;

function taschenrechner(string) {
  for (let a = 0; a < string.length; a++) {
    if (string[a] !== "+" || "-" || "*" || "/" || "=") {
      n1 = n1 + string[a];
    }
  }
  for (let b = 0; b < string.length; b++) {
    if (string[a] !== "+" || "-" || "*" || "/" || "=") {
      n2 = n2 + string[a];
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i] && !Zustand2) {
      n1 = n1 + +string[i];
    }

    if (string[i] === "+" || "-" || "*" || "/") {
      Zustand2 = true;
      if (string[i] === "+") {
        mode = "+";
      } else if (string[i] === "-") {
        mode = "-";
      } else if (string[i] === "*") {
        mode = "*";
      } else if (string[i] === "/") {
        mode = "/";
      }
    }
    if (string[i] === isnumber(string[i]) && Zustand2) {
      n2 = n2 + +string[i];
    }
    if (string[i] === "=") {
      if (mode == "+") {
        result = +n1 + +n2;
        output.innerText = result;
      } else if (mode == "-") {
        result = +n1 - +n2;
        output.innerText = result;
      } else if (mode == "*") {
        result = +n1 * +n2;
        output.innerText = result;
      } else if (mode == "/") {
        result = +n1 / +n2;
        output.innerText = result;
      }
    }
  }
}
/* function stringConverter(string) {
  for (let i = 0; i < string.length; i++) {
    while (string.charAt(i) === charAt(i) && !Zustand2) {
      n1 = n1 + string.slice(i, i);
    }
    if (string.charAt(i) === "+" || "-" || "*" || "/") {
      Zustand2 = true;
      if (string.charAt(i) === "+") {
        mode = "+";
      } else if (string.charAt(i) === "-") {
        mode = "-";
      } else if (string.charAt(i) === "*") {
        mode = "*";
      } else if (string.charAt(i) === "/") {
        mode = "/";
      }
      while (string.charAt(i) === isnumber(charAt(i) && Zustand2)) {
        n2 = n2 + string.charAt(i);
      }
    }
    if (string.charAt(i) === "=") {
      return;
    }
  }
} */

gleich.onclick = function () {
  if (isfertig === false) {
    input.value = input.value + "=";
    isfertig = true;
    taschenrechner(document.querySelector(".input").value);
  }
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
  if (modeon === false) {
    input.value = input.value + "+";
    modeon = true;
  }
};
min.onclick = function () {
  if (modeon === false) {
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

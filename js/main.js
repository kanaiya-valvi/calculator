// ! Display number Function
let displayText = document.querySelector("#display");

// ! Numbers Events
document.querySelector("#btn-1").onclick = () => myfun(1);
document.querySelector("#btn-2").onclick = () => myfun(2);
document.querySelector("#btn-3").onclick = () => myfun(3);
document.querySelector("#btn-4").onclick = () => myfun(4);
document.querySelector("#btn-5").onclick = () => myfun(5);
document.querySelector("#btn-6").onclick = () => myfun(6);
document.querySelector("#btn-7").onclick = () => myfun(7);
document.querySelector("#btn-8").onclick = () => myfun(8);
document.querySelector("#btn-9").onclick = () => myfun(9);
document.querySelector("#zero").onclick = () => myfun(0);

// ? Mathematical Opration

document.querySelector("#addition").onclick = () => myfun("+");
document.querySelector("#modulo").onclick = () => myfun("%");
document.querySelector("#devition").onclick = () => myfun("/");
document.querySelector("#multiplication").onclick = () => myfun("*");
document.querySelector("#substract").onclick = () => myfun("-");

// ! Sum

document.querySelector("#sum").onclick = () => {
  let str3 = displayText.value;
  len2 = str3.substr(-2);
  if (len2 == "/0") {
    displayText.value = "";
  } else if (displayText.value !== "") {
    displayText.value = eval(displayText.value);
    clearSum = 1;
  }
};

// * Sum Featyers
const ac = document.querySelector("#ac");
const back = document.querySelector("#back");
const dot = document.querySelector("#dot");

dot.addEventListener("click", () => {
  let str = displayText.value;
  if (!str.includes(".")) displayText.value += ".";
});

// ! Clear Screen
ac.addEventListener("click", () => {
  displayText.value = "";
});

back.addEventListener("click", () => {
  let str1 = displayText.value;
  let str2 = str1.substr(0, str1.length - 1);
  displayText.value = str2;
});

// ! check the operator
/*
window.addEventListener("click", () => {
  let str = displayText.value;
  let len = str.substr(-2);
  let str2;

  //Array operator check
  const checkOperator = [
    "++",
    "+/",
    "+-",
    "+%",
    "+*",
    "--",
    "-/",
    "-+",
    "-%",
    "-*",
    "//",
    "/-",
    "/+",
    "/%",
    "/*",
    "%*",
    "%%",
    "%-",
    "%+",
    "%/",
    "%*",
    "**",
    "*+",
    "*-",
    "*%",
    "*(dicede)/",
  ];
  if ([...checkOperator].includes(len)) {
    str2 = str.substr(0, str.length - 1);
    displayText.value = str2;
  }
  ////////////////////////////
  //    * top impliment code using array
  if (
    len == "++" ||
    len == "+/" ||
    len == "+-" ||
    len == "+%" ||
    len == "+*" ||
    len == "--" ||
    len == "-/" ||
    len == "-+" ||
    len == "-%" ||
    len == "-*" ||
    len == "//" ||
    len == "/-" ||
    len == "/+" ||
    len == "/%" ||
    len == "/*" ||
    len == "%*" ||
    len == "%%" ||
    len == "%-" ||
    len == "%+" ||
    len == "%/" ||
    len == "%*" ||
    len == "**" ||
    len == "*+" ||
    len == "*-" ||
    len == "*%" ||
    len == "*(dicede)/"
  ) {
    str2 = str.substr(0, str.length - 1);
    displayText.value = str2;
  }
});
*/
// ? after sum check a number or operator
let clearSum = 0;
let len2;
function myfun(x) {
  let str = displayText.value;
  let len = str.substr(-1);
  let str2;
  if (clearSum == 1) {
    if (x == "+" || x == "/" || x == "%" || x == "*" || x == "-") {
      displayText.value += x;
    } else {
      displayText.value = x;
    }
    clearSum = 0;
  } else if (x == "+" || x == "/" || x == "%" || x == "*" || x == "-") {
    if (len == "+" || len == "/" || len == "%" || len == "*" || len == "-") {
      str2 = str.substr(0, str.length - 1);
      displayText.value = str2;
      displayText.value += x;
    } else {
      displayText.value += x;
    }
  } else {
    displayText.value += x;
  }
}
// TODO entuter button click event
/*
addEventListener("keypress", (e) => {
  if ({ key: "Enter" }) {
    if (displayText.value !== "") {
      displayText.value = eval(displayText.value);
      clearSum = 1;
    }
  }
});
*/

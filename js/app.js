const user = { personNamee: "", icecreamyy: "" };

const bodyy = document.querySelector("body");
const homeText = document.getElementById("home-text");
const startBtn = document.getElementById("start-btn");
const startAgainBtn = document.getElementById("start-Again-btn");
const firstBox = document.getElementById("first-box");
const secondBox = document.getElementById("second-box");
const boxes2 = document.querySelector(".boxes2");
const formElement = document.querySelector("form");
const configError1 = document.querySelector(".config-error1");
const configError2 = document.querySelector(".config-error2");
const configError3 = document.querySelector(".config-error3");
const box3 = document.getElementById("box3");
const personnameVal = document.getElementById("personname");
const icecreamInpVal = document.getElementById("icecreamInp");
let personName = document.getElementById("person-name");

// PARAGRAPHS
const parg1 = document.getElementById("parg-1");
const parg2 = document.getElementById("parg-2");
const parg3 = document.getElementById("parg-3");
const parg4 = document.getElementById("parg-4");
const parg5 = document.getElementById("parg-5");
const parg6 = document.getElementById("parg-6");
const parg7 = document.getElementById("parg-7");

// IMAGES
const coneHolder = document.querySelector(".cone-holder");
const cupHolder = document.querySelector(".cup-holder");
const stickHolder = document.querySelector(".stick-holder");

startBtn.addEventListener("click", changeBodyStyle);
formElement.addEventListener("submit", getInfo);
startAgainBtn.addEventListener("click", backAgain);

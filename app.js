"use strict";

let btns = document.getElementsByClassName("btn");
let generate = document.getElementById("generate");
let result = document.getElementById("display");
let pointEl = document.getElementById("point");

let randomN;
let chosen;
let points = 0;

// Event Listeners

generate.addEventListener("click", randomNum);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", choose);
}

// Functions

function randomNum() {
  reset();
  let random = Math.floor(Math.random() * 10);
  randomN = random;
  showStar();
  console.log(randomN);
}

function choose(e) {
  if (randomN === 0 || randomN) {
    chosen = Number(e.target.innerText);
    display();
  }
}

function display() {
  if (randomN === chosen) {
    result.innerText = "You earned a Point!";
    result.classList.add("right");
    randomN = null;
    addPoint();
  } else {
    result.innerText = "Wrong, Game Over!";
    result.classList.add("wrong");
    resetPoint();
  }
}

function reset() {
  result.classList.remove("wrong");
  result.classList.remove("right");
  result.classList.remove("star");
  result.innerText = "-";
}

function addPoint() {
  points++;
  pointEl.innerText = points;
}

function resetPoint() {
  points = 0;
  pointEl.innerText = points;
}

function showStar() {
  result.innerText = "random number generated";
  result.classList.add("star");
}

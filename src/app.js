/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let stick = ["♦", "♥", "♠", "♣"];
  let stickRandom = stick[Math.floor(Math.random() * stick.length)];
  let numbersRandom = numbers[Math.floor(Math.random() * numbers.length)];

  document.querySelector("#palo-top").innerHTML = stickRandom;
  document.querySelector("#palo-bottom").innerHTML = stickRandom;

  if (stick[stickRandom] == "♦" || stick) {
    let rombo = document.querySelector("#palo-bottom");
    rombo.style.color = "red";
  } else if (stick[stickRandom] == ":corazones:") {
    let heart = document.querySelector("#palo-bottom");
    heart.style.color = "red";
  }

  document.querySelector("p").innerHTML = numbersRandom;
};

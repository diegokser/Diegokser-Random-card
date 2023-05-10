/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function randomCard() {
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

  let changeColor = () => {
    if (stickRandom == "♦" || stickRandom == "♥") {
      let diamond = document.querySelector("#palo-bottom");
      let heart = document.querySelector("#palo-top");
      heart.style.color = "red";
      diamond.style.color = "red";
    } else if (stickRandom == "♠" || stickRandom == "♣") {
      let spades = document.querySelector("#palo-bottom");
      let clover = document.querySelector("#palo-top");
      spades.style.color = "black";
      clover.style.color = "black";
    }
  };
  changeColor();
  let button = document.querySelector(".btn-secondary");
  button.addEventListener("click", randomCard);
  document.querySelector("p").innerHTML = numbersRandom;
};

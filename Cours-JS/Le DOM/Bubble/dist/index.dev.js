"use strict";

var counterDisplay = document.querySelector("h3");
var counter = 0;

var bubbleMaker = function bubbleMaker() {
  var bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  var size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  var plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  bubble.addEventListener("click", function () {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  setTimeout(function () {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 100);
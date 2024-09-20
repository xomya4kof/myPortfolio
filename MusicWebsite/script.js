"use strict";

let audio = document.getElementById("audio");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (audio.paused) {
    audio.play();
    icon.src = "images/pause.png";
    document.querySelector("p").textContent = "Pause";
  } else {
    audio.pause();
    icon.src = "images/play.png";
    document.querySelector("p").textContent = "Play";
  }
};

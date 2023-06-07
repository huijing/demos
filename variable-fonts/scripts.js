"use strict";

const softInput = document.getElementById("soft");
const opszInput = document.getElementById("opsz");
const spacInput = document.getElementById("space");
const wghtInput = document.getElementById("weight");
if (softInput) {
  softInput.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("--soft", event.target.value);
  });
}
if (opszInput) {
  opszInput.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("--opsz", event.target.value);
  });
}
if (spacInput) {
  spacInput.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("--spac", event.target.value);
  });
}
if (wghtInput) {
  wghtInput.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("--wght", event.target.value);
  });
}
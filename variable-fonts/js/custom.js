const softInput = document.getElementById("soft");
const opszInput = document.getElementById("opsz");
const spacInput = document.getElementById("space");
const wghtInput = document.getElementById("weight");

softInput.addEventListener("input", function (event) {
  document.documentElement.style.setProperty("--soft", event.target.value);
});

opszInput.addEventListener("input", function (event) {
  document.documentElement.style.setProperty("--opsz", event.target.value);
});

spacInput.addEventListener("input", function (event) {
  document.documentElement.style.setProperty("--spac", event.target.value);
});

wghtInput.addEventListener("input", function (event) {
  document.documentElement.style.setProperty("--wght", event.target.value);
});

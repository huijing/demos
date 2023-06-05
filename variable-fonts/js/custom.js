const softInput = document.getElementById("soft");
const opszInput = document.getElementById("opsz");
const spacInput = document.getElementById("space");
const wghtInput = document.getElementById("weight");

softInput.addEventListener("change", function (event) {
  document.documentElement.style.setProperty("--soft", event.target.value);
});

opszInput.addEventListener("change", function (event) {
  document.documentElement.style.setProperty("--opsz", event.target.value);
});

spacInput.addEventListener("change", function (event) {
  document.documentElement.style.setProperty("--spac", event.target.value);
});

wghtInput.addEventListener("change", function (event) {
  document.documentElement.style.setProperty("--wght", event.target.value);
});

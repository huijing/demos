"use strict";

var root = document.documentElement;
var colourInput = document.getElementById('colour');
var hexCode = document.getElementById('hexCode');
var hexDigits = document.querySelectorAll('[data-digit]');
var hexValues = document.querySelectorAll('[data-value]');
colourInput.addEventListener('input', function () {
  setRgb(colourInput.value);
  var hexChars = colourInput.value.substring(1).split('');
  hexCode.innerHTML = '';

  for (var i = 0; i < hexValues.length; i++) {
    hexValues[i].classList.remove('active');
  }

  hexChars.forEach(printHex);
  hexChars.forEach(getCharacter);
  hexCode.insertAdjacentHTML("afterbegin", "<span>#</span>");
}, false);

function setRgb(hex) {
  var tempHex = hex.replace('#', '');
  var r = parseInt(tempHex.substring(0, 2), 16);
  var g = parseInt(tempHex.substring(2, 4), 16);
  var b = parseInt(tempHex.substring(4, 6), 16);
  root.style.setProperty('--r', r);
  root.style.setProperty('--g', g);
  root.style.setProperty('--b', b);
}

function printHex(item, index, array) {
  hexCode.innerHTML += '<span>' + item + '</span>';
}

function getCharacter(item, index, array) {
  var set = hexDigits[index];
  var value = set.querySelector('[data-value="' + item + '"]');
  value.classList.add('active');
}
const root = document.documentElement;
const colourInput = document.getElementById('colour');
const hexCode = document.getElementById('hexCode');
const hexDigits = document.querySelectorAll('[data-digit]');
const hexValues = document.querySelectorAll('[data-value]');

colourInput.addEventListener('input', () => { 
  setRgb(colourInput.value);
  let hexChars = colourInput.value.substring(1).split('')
  hexCode.innerHTML = '';
  for (var i = 0; i < hexValues.length; i++) {
    hexValues[i].classList.remove('active');
  }
  hexChars.forEach(printHex);
  hexChars.forEach(getCharacter);
  hexCode.insertAdjacentHTML("afterbegin", "<span>#</span>");
}, false);

function setRgb(hex) {
  const tempHex = hex.replace('#', '');
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);
  
  root.style.setProperty('--r', r);
  root.style.setProperty('--g', g);
  root.style.setProperty('--b', b);
}

function printHex(item, index, array) {
  hexCode.innerHTML += '<span>' + item + '</span>';
}

function getCharacter(item, index, array) {
  let set = hexDigits[index];
  let value = set.querySelector('[data-value="' + item + '"]');
  value.classList.add('active');
}

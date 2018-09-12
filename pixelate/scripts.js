"use strict";

var ctx = canvas.getContext('2d');
var img = new Image();
ctx.imageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
img.onload = pixelate;
img.src = 'img/logo.png';

function pixelate(event) {
  var size = pixels.value * 0.01;
  var scaledWidth = canvas.width * size;
  var scaledHeight = canvas.height * size;
  ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
  ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, canvas.width, canvas.height);

  if (size === 0.16) {
    logo.classList.remove('hidden');
    canvas.className = 'hidden';
  } else {
    logo.classList.add('hidden');
    canvas.className = '';
  }
}

pixels.addEventListener('change', pixelate, false);
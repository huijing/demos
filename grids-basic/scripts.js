'use strict';

var switcher = document.getElementById('jsSwitcher');
var imgStyle = document.getElementById('jsImgStyle');
switcher.value = 0;
var features = ['plain', 'border', 'shadow'];
var message = ['Plain', 'Border', 'Shadow'];
var body = document.body;

function switchFeature(e) {
  for (var i = 0; i <= parseInt(e.target.value); i++) {
    document.querySelector('.js-status').textContent = message[i];
    body.className = features[i];
  }
}

function switchImgStyle(e) {
  var images = document.querySelectorAll('.card__img');
  var irregularImg = imgStyle.checked;
  if (irregularImg) {
    Array.prototype.forEach.call(images, function (image, index) {
      image.src = "images2/image" + (index + 1) + ".jpg";
    });
  } else {
    Array.prototype.forEach.call(images, function (image, index) {
      image.src = "images/image" + (index + 1) + ".jpg";
    });
  }
}

switcher.addEventListener('change', switchFeature);
switcher.addEventListener('input', switchFeature);
imgStyle.addEventListener('change', switchImgStyle);
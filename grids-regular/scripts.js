'use strict';

var switcher = document.getElementById('jsSwitcher');
switcher.value = 0;
var features = ['fixed', 'fluid', 'responsive'];
var message = ['Fixed Grid', 'Fluid Grid', 'Responsive Grid'];
var body = document.body;

function switchFeature(e) {
  for (var i = 0; i <= parseInt(e.target.value); i++) {
    document.querySelector('.js-status').textContent = message[i];
    body.className = features[i];
  }
}

switcher.addEventListener('change', switchFeature);
switcher.addEventListener('input', switchFeature);
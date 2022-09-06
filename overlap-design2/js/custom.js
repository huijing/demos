const switcher = document.getElementById('jsSwitcher')
switcher.value = 0
const features = ['position', 'margin', 'transform', 'grid'];
const message = ['Absolute positioning', 'Negative margins', 'CSS transforms', 'CSS grid'];
const main = document.querySelector('main');

function switchFeature(e) {
  for (let i = 0; i <= parseInt(e.target.value); i++) {
    document.querySelector('.js-status').textContent = message[i]
    main.className = features[i]
  }
}

switcher.addEventListener('change', switchFeature)
switcher.addEventListener('input', switchFeature)

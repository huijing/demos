const switcher = document.getElementById('jsSwitcher')
switcher.value = 0
const features = ['fixed', 'fluid', 'responsive'];
const message = ['Fixed Grid', 'Fluid Grid', 'Responsive Grid'];
const body = document.body

function switchFeature(e) {
  for (let i = 0; i <= parseInt(e.target.value); i++) {
    document.querySelector('.js-status').textContent = message[i]
    body.className = features[i]
  }
}

switcher.addEventListener('change', switchFeature)
switcher.addEventListener('input', switchFeature)

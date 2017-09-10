const switcher = document.getElementById('jsSwitcher')
const imgStyle = document.getElementById('jsImgStyle')
switcher.value = 0
const features = ['plain', 'border', 'shadow'];
const message = ['Plain', 'Border', 'Shadow'];
const body = document.body

function switchFeature(e) {
  for (let i = 0; i <= parseInt(e.target.value); i++) {
    document.querySelector('.js-status').textContent = message[i]
    body.className = features[i]
  }
}

function switchImgStyle(e) {
  const images = document.querySelectorAll('.card__img')
  const irregularImg = imgStyle.checked
  if (irregularImg) {
    Array.prototype.forEach.call(images, function (image, index) {
      image.src = "images2/image" + (index + 1) + ".jpg"
    })
  } else {
    Array.prototype.forEach.call(images, function (image, index) {
      image.src = "images/image" + (index + 1) + ".jpg"
    })
  }
}

switcher.addEventListener('change', switchFeature)
switcher.addEventListener('input', switchFeature)
imgStyle.addEventListener('change', switchImgStyle)


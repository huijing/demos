const ctx = canvas.getContext('2d')
const img = new Image()

ctx.imageSmoothingEnabled = false
ctx.webkitImageSmoothingEnabled = false
ctx.imageSmoothingEnabled = false

img.onload = pixelate
img.src = 'img/logo.png'

function pixelate(event) {
  const size = pixels.value * 0.01
  const scaledWidth = canvas.width * size
  const scaledHeight = canvas.height * size

  ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight)
  ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, canvas.width, canvas.height)

  if (size === 0.16) {
    logo.classList.remove('hidden')
    canvas.className = 'hidden'
  } else {
    logo.classList.add('hidden')
    canvas.className = ''
  }
}

pixels.addEventListener('change', pixelate, false)

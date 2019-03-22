const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const totalData = document.getElementById('titles').childElementCount

prevBtn.addEventListener('click', prevHandler, false)
nextBtn.addEventListener('click', nextHandler, false)

function prevHandler(evt) {
  let activeData = parseInt(document.querySelector('[data-active]').dataset.active)
  const prevData = activeData - 1

  if (activeData > 1) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-info="' + activeData + '"]'), info => {
      info.classList.remove('jsActive')
    })
    Array.prototype.forEach.call(document.querySelectorAll('[data-info="' + prevData + '"]'), info => {
      info.classList.add('jsActive')
    })
    document.querySelector('[data-active]').dataset.active = activeData - 1
  } else {
    console.log('Reach the start already')
  }
}

function nextHandler(evt) {
  let activeData = parseInt(document.querySelector('[data-active]').dataset.active)
  const nextData = activeData + 1
  if (activeData < totalData) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-info="' + activeData + '"]'), info => {
      info.classList.remove('jsActive')
    })
    Array.prototype.forEach.call(document.querySelectorAll('[data-info="' + nextData + '"]'), info => {
      info.classList.add('jsActive')
    })
    document.querySelector('[data-active]').dataset.active = activeData + 1
  } else {
    console.log('Reach the end already')
  }
}
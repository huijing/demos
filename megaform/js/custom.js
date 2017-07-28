const toggle = document.getElementById('jsToggle')
const bodyClass = document.body.classList

function addClass() {
  if (bodyClass.contains('vertical')) {
    bodyClass.remove('vertical')
  } else {
    bodyClass.add('vertical')
  }
}

toggle.addEventListener('change', addClass)

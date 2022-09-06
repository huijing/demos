const options = document.querySelectorAll('input[name="switcher"]');
const main = document.querySelector('main');
const section = document.querySelector('section');
const sectionHeightValue = document.getElementById('jsSectionHeight');

function switchOption(e) {
  const selectedOption = e.target.value;
  main.className = selectedOption;
  sectionHeightValue.textContent = section.offsetHeight;
}

options.forEach((input) => {
  input.addEventListener('change', switchOption);
});

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    sectionHeightValue.textContent = section.offsetHeight;
  }
});

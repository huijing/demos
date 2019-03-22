"use strict";

var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var totalData = document.getElementById('titles').childElementCount;
prevBtn.addEventListener('click', prevHandler, false);
nextBtn.addEventListener('click', nextHandler, false);

function prevHandler(evt) {
  var activeData = parseInt(document.querySelector('[data-active]').dataset.active);
  var prevData = activeData - 1;

  if (activeData > 1) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-info="' + activeData + '"]'), function (info) {
      info.classList.remove('jsActive');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-info="' + prevData + '"]'), function (info) {
      info.classList.add('jsActive');
    });
    document.querySelector('[data-active]').dataset.active = activeData - 1;
  } else {
    console.log('Reach the start already');
  }
}

function nextHandler(evt) {
  var activeData = parseInt(document.querySelector('[data-active]').dataset.active);
  var nextData = activeData + 1;

  if (activeData < totalData) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-info="' + activeData + '"]'), function (info) {
      info.classList.remove('jsActive');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-info="' + nextData + '"]'), function (info) {
      info.classList.add('jsActive');
    });
    document.querySelector('[data-active]').dataset.active = activeData + 1;
  } else {
    console.log('Reach the end already');
  }
}
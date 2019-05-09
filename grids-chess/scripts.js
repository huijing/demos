"use strict";

var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var moves = 0;
prevBtn.addEventListener('click', prevHandler, false);
nextBtn.addEventListener('click', nextHandler, false);

function nextHandler() {
  if (moves < 4) {
    countUp();
    addActive(moves);
    console.log(moves);
  } else {
    console.log('Already checkmate');
  }
}

function prevHandler() {
  if (moves > 0) {
    removeActive(moves);
    countDown();
    console.log(moves);
  } else {
    console.log('Back to the start');
  }
}

function addActive(moves) {
  var activeMove = document.querySelector('.move' + moves);
  activeMove.classList.add('active');
}

function removeActive(moves) {
  var activeMove = document.querySelector('.move' + moves);
  activeMove.classList.remove('active');
}

function countUp() {
  return moves++;
}

function countDown() {
  return moves--;
}
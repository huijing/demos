"use strict";

const audioElement1 = document.querySelector(".audio1");
const canvas1 = document.querySelector(".frequency-bar");
const audioElement2 = document.querySelector(".audio2");
const canvas2 = document.querySelector(".sine-wave");
audioElement1.addEventListener("play", () => frequencyBarsPlayHandler(audioElement1, canvas1));
audioElement2.addEventListener("play", () => sineWavePlayHandler(audioElement2, canvas2));
function frequencyBarsPlayHandler(audioElement, canvas) {
  let source;
  const audioCtx = new AudioContext();
  if (!source) {
    source = new MediaElementAudioSourceNode(audioCtx, {
      mediaElement: audioElement
    });
    const analyser = audioCtx.createAnalyser();
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.65;
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    frequencyBars(analyser, canvas);
  }
}
function sineWavePlayHandler(audioElement, canvas) {
  let source;
  const audioCtx = new AudioContext();
  if (!source) {
    source = new MediaElementAudioSourceNode(audioCtx, {
      mediaElement: audioElement
    });
    const analyser = audioCtx.createAnalyser();
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.65;
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    sineWave(analyser, canvas);
  }
}
function frequencyBars(analyser, canvas) {
  const canvasCtx = canvas.getContext("2d");
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Float32Array(bufferLength);
  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
  function draw() {
    requestAnimationFrame(draw);
    analyser.getFloatFrequencyData(dataArray);
    canvasCtx.fillStyle = "rgb(0, 0, 0)";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    const barWidth = WIDTH / bufferLength * 2.5;
    let barHeight;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      barHeight = (dataArray[i] + 100) * 2;
      canvasCtx.fillStyle = `rgb(${Math.floor(barHeight + 120)}, 150, 30)`;
      canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
      x += barWidth + 1;
    }
  }
  draw();
}
function sineWave(analyser, canvas) {
  console.log(canvas);
  const canvasCtx = canvas.getContext("2d");
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  analyser.fftSize = 1024;
  const bufferLength = analyser.fftSize;
  const dataArray = new Float32Array(bufferLength);
  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
  function draw() {
    requestAnimationFrame(draw);
    analyser.getFloatTimeDomainData(dataArray);
    canvasCtx.fillStyle = "rgb(200, 200, 200)";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "rgb(0, 0, 0)";
    canvasCtx.beginPath();
    const sliceWidth = WIDTH * 1.0 / bufferLength;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] * 200.0;
      const y = HEIGHT / 2 + v;
      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }
      x += sliceWidth;
    }
    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }
  draw();
}
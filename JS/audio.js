// 创建一个新对象
// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// html导入
const audios = document.querySelectorAll(".container-3-audio");
const audioOne = document.querySelector(".container-3-audio-1");
const audioTwo = document.querySelector(".container-3-audio-2");
const audioThree = document.querySelector(".container-3-audio-3");
const audioFour = document.querySelector(".container-3-audio-4");
const audioFive = document.querySelector(".container-3-audio-5");
const audioIconPlayOne = document.querySelector(".container-3-text-icon-1-1");
const audioIconPlayTwo = document.querySelector(".container-3-text-icon-1-2");
const audioIconPlayThree = document.querySelector(".container-3-text-icon-1-3");
const audioIconPlayFour = document.querySelector(".container-3-text-icon-1-4");
const audioIconPlayFive = document.querySelector(".container-3-text-icon-1-5");
const audioIconPauseOne = document.querySelector(".container-3-text-icon-2-1");
const audioIconPauseTwo = document.querySelector(".container-3-text-icon-2-2");
const audioIconPauseThree = document.querySelector(
  ".container-3-text-icon-2-3"
);
const audioIconPauseFour = document.querySelector(".container-3-text-icon-2-4");
const audioIconPauseFive = document.querySelector(".container-3-text-icon-2-5");
const audioCanvas = document.querySelector(".audioCanvas");
const audioCanvasCtx = audioCanvas.getContext("2d");

// 变量申明
let audio = audioOne;
let isPlay = false;
let analyser;
let dataArray;

// 画布初始状态
audioCanvasCtx.fillStyle = "rgb(174, 59, 59)";
for (let i = 0; i < 256; i += 2) {
  audioCanvasCtx.fillRect(i * 2, audioCanvas.height / 2 - 1, 2, 2);
  audioCanvasCtx.fillRect(i * 2, audioCanvas.height / 2, 2, 2);
}

/////////初始设定
let init = function () {
  // 音频文件导入--1
  const audioCtxOne = new AudioContext();
  const sourceOne = audioCtxOne.createMediaElementSource(audioOne);
  analyserOne = audioCtxOne.createAnalyser();
  ////连接音频文件——音频处理器 设置参数--1
  sourceOne.connect(analyserOne);
  analyserOne.connect(audioCtxOne.destination);
  analyserOne.fftSize = 512;
  dataArrayOne = new Uint8Array(analyserOne.frequencyBinCount);
  // 音频文件导入--2
  const audioCtxTwo = new AudioContext();
  const sourceTwo = audioCtxTwo.createMediaElementSource(audioTwo);
  analyserTwo = audioCtxTwo.createAnalyser();
  ////连接音频文件——音频处理器 设置参数--2
  sourceTwo.connect(analyserTwo);
  analyserTwo.connect(audioCtxTwo.destination);
  analyserTwo.fftSize = 512;
  dataArrayTwo = new Uint8Array(analyserTwo.frequencyBinCount);
  // 音频文件导入--3
  const audioCtxThree = new AudioContext();
  const sourceThree = audioCtxThree.createMediaElementSource(audioThree);
  analyserThree = audioCtxThree.createAnalyser();
  ////连接音频文件——音频处理器 设置参数--3
  sourceThree.connect(analyserThree);
  analyserThree.connect(audioCtxThree.destination);
  analyserThree.fftSize = 512;
  dataArrayThree = new Uint8Array(analyserThree.frequencyBinCount);
  // 音频文件导入--4
  const audioCtxFour = new AudioContext();
  const sourceFour = audioCtxFour.createMediaElementSource(audioFour);
  analyserFour = audioCtxFour.createAnalyser();
  ////连接音频文件——音频处理器 设置参数--4
  sourceFour.connect(analyserFour);
  analyserFour.connect(audioCtxFour.destination);
  analyserFour.fftSize = 512;
  dataArrayFour = new Uint8Array(analyserFour.frequencyBinCount);
  // 音频文件导入--5
  const audioCtxFive = new AudioContext();
  const sourceFive = audioCtxFive.createMediaElementSource(audioFive);
  analyserFive = audioCtxFive.createAnalyser();
  ////连接音频文件——音频处理器 设置参数--5
  sourceFive.connect(analyserFive);
  analyserFive.connect(audioCtxFive.destination);
  analyserFive.fftSize = 512;
  dataArrayFive = new Uint8Array(analyserFive.frequencyBinCount);
};
init();

////绘制函数--1
const drawOne = function () {
  // 防止暂停运行
  if (!isPlay) return;

  // 使canvas连续运行
  requestAnimationFrame(drawOne);
  ///////清空画布/////////////////////////
  audioCanvasCtx.clearRect(0, 0, audioCanvas.width, audioCanvas.height);
  /////导入音频数据///////////////////////////
  analyserOne.getByteFrequencyData(dataArrayOne);

  /////初始参数///////////////////////////
  let len = dataArrayOne.length;
  let barWidth = 2;

  ////////////////////////////////

  for (let i = 0; i < len; i += 2) {
    const data = dataArrayOne[i];
    let barHeight = ((data / 255) * audioCanvas.height) / 4;
    const x = i * barWidth;

    barHeight < 2 ? (barHeight = 2) : (barHeight = barHeight);

    const y1 = audioCanvas.height / 2 - barHeight;
    const y2 = audioCanvas.height / 2;
    // 开画

    audioCanvasCtx.fillRect(x, y1, barWidth, barHeight);
    audioCanvasCtx.fillRect(x, y2, barWidth, barHeight);
  }
};
////绘制函数--2
const drawTwo = function () {
  // 防止暂停运行
  if (!isPlay) return;

  // 使canvas连续运行
  requestAnimationFrame(drawTwo);
  ///////清空画布/////////////////////////
  audioCanvasCtx.clearRect(0, 0, audioCanvas.width, audioCanvas.height);
  /////导入音频数据///////////////////////////
  analyserTwo.getByteFrequencyData(dataArrayTwo);

  /////初始参数///////////////////////////
  let len = dataArrayTwo.length;
  let barWidth = 2;

  ////////////////////////////////

  for (let i = 0; i < len; i += 2) {
    const data = dataArrayTwo[i];
    let barHeight = ((data / 255) * audioCanvas.height) / 4;
    const x = i * barWidth;

    barHeight < 2 ? (barHeight = 2) : (barHeight = barHeight);

    const y1 = audioCanvas.height / 2 - barHeight;
    const y2 = audioCanvas.height / 2;
    // 开画

    audioCanvasCtx.fillRect(x, y1, barWidth, barHeight);
    audioCanvasCtx.fillRect(x, y2, barWidth, barHeight);
  }
};
////绘制函数--3
const drawThree = function () {
  // 防止暂停运行
  if (!isPlay) return;

  // 使canvas连续运行
  requestAnimationFrame(drawThree);
  ///////清空画布/////////////////////////
  audioCanvasCtx.clearRect(0, 0, audioCanvas.width, audioCanvas.height);
  /////导入音频数据///////////////////////////
  analyserThree.getByteFrequencyData(dataArrayThree);

  /////初始参数///////////////////////////
  let len = dataArrayThree.length;
  let barWidth = 2;

  ////////////////////////////////

  for (let i = 0; i < len; i += 2) {
    const data = dataArrayThree[i];
    let barHeight = ((data / 255) * audioCanvas.height) / 4;
    const x = i * barWidth;

    barHeight < 2 ? (barHeight = 2) : (barHeight = barHeight);

    const y1 = audioCanvas.height / 2 - barHeight;
    const y2 = audioCanvas.height / 2;
    // 开画

    audioCanvasCtx.fillRect(x, y1, barWidth, barHeight);
    audioCanvasCtx.fillRect(x, y2, barWidth, barHeight);
  }
};
////绘制函数--4
const drawFour = function () {
  // 防止暂停运行
  if (!isPlay) return;

  // 使canvas连续运行
  requestAnimationFrame(drawFour);
  ///////清空画布/////////////////////////
  audioCanvasCtx.clearRect(0, 0, audioCanvas.width, audioCanvas.height);
  /////导入音频数据///////////////////////////
  analyserFour.getByteFrequencyData(dataArrayFour);

  /////初始参数///////////////////////////
  let len = dataArrayFour.length;
  let barWidth = 2;

  ////////////////////////////////

  for (let i = 0; i < len; i += 2) {
    const data = dataArrayFour[i];
    let barHeight = ((data / 255) * audioCanvas.height) / 4;
    const x = i * barWidth;

    barHeight < 2 ? (barHeight = 2) : (barHeight = barHeight);

    const y1 = audioCanvas.height / 2 - barHeight;
    const y2 = audioCanvas.height / 2;
    // 开画

    audioCanvasCtx.fillRect(x, y1, barWidth, barHeight);
    audioCanvasCtx.fillRect(x, y2, barWidth, barHeight);
  }
};
////绘制函数--5
const drawFive = function () {
  // 防止暂停运行
  if (!isPlay) return;

  // 使canvas连续运行
  requestAnimationFrame(drawFive);
  ///////清空画布/////////////////////////
  audioCanvasCtx.clearRect(0, 0, audioCanvas.width, audioCanvas.height);
  /////导入音频数据///////////////////////////
  analyserFive.getByteFrequencyData(dataArrayFive);

  /////初始参数///////////////////////////
  let len = dataArrayFive.length;
  let barWidth = 2;

  ////////////////////////////////

  for (let i = 0; i < len; i += 2) {
    const data = dataArrayFive[i];
    let barHeight = ((data / 255) * audioCanvas.height) / 4;
    const x = i * barWidth;

    barHeight < 2 ? (barHeight = 2) : (barHeight = barHeight);

    const y1 = audioCanvas.height / 2 - barHeight;
    const y2 = audioCanvas.height / 2;
    // 开画

    audioCanvasCtx.fillRect(x, y1, barWidth, barHeight);
    audioCanvasCtx.fillRect(x, y2, barWidth, barHeight);
  }
};

// 音频开始/暂停
const audioPlay = function (a, b) {
  a.addEventListener("click", () => {
    audios.forEach((e) => {
      e.pause();
      // 重置播放时间
      if (!b.classList.contains("playing")) {
        e.currentTime = 0;
      }
    });

    if (a == audioIconPlayOne) {
      audios.forEach((e) => {
        e.classList.remove("playing");
      });
      audioOne.classList.add("playing");
    } else if (a == audioIconPlayTwo) {
      audios.forEach((e) => {
        e.classList.remove("playing");
      });
      audioTwo.classList.add("playing");
    } else if (a == audioIconPlayThree) {
      audios.forEach((e) => {
        e.classList.remove("playing");
      });
      audioThree.classList.add("playing");
    } else if (a == audioIconPlayFour) {
      audios.forEach((e) => {
        e.classList.remove("playing");
      });
      audioFour.classList.add("playing");
    } else if (a == audioIconPlayFive) {
      audios.forEach((e) => {
        e.classList.remove("playing");
      });
      audioFive.classList.add("playing");
    }

    b.play();
  });
};
const audioPause = function (a, b) {
  a.addEventListener("click", () => {
    b.pause();
  });
};
const audioChange = function () {
  audioPlay(audioIconPlayOne, audioOne);
  audioPlay(audioIconPlayTwo, audioTwo);
  audioPlay(audioIconPlayThree, audioThree);
  audioPlay(audioIconPlayFour, audioFour);
  audioPlay(audioIconPlayFive, audioFive);
  audioPause(audioIconPauseOne, audioOne);
  audioPause(audioIconPauseTwo, audioTwo);
  audioPause(audioIconPauseThree, audioThree);
  audioPause(audioIconPauseFour, audioFour);
  audioPause(audioIconPauseFive, audioFive);
};
audioChange();

////监听音频播放状态--1
audioOne.onplay = () => {
  isPlay = true;
  drawOne();
};
audioOne.onpause = () => {
  isPlay = false;
};
////监听音频播放状态--2
audioTwo.onplay = () => {
  isPlay = true;
  drawTwo();
};
audioTwo.onpause = () => {
  isPlay = false;
};
////监听音频播放状态--3
audioThree.onplay = () => {
  isPlay = true;
  drawThree();
};
audioThree.onpause = () => {
  isPlay = false;
};
////监听音频播放状态--4
audioFour.onplay = () => {
  isPlay = true;
  drawFour();
};
audioFour.onpause = () => {
  isPlay = false;
};
////监听音频播放状态--5
audioFive.onplay = () => {
  isPlay = true;
  drawFive();
};
audioFive.onpause = () => {
  isPlay = false;
};

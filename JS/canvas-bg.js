"use strict";

var canvas1 = document.querySelector(".startBgCanvas"),
  ctx1 = canvas1.getContext("2d"),
  canvas5 = document.querySelector(".container-5-fes-bgCanvas"),
  ctx5 = canvas5.getContext("2d"),
  // w = (canvas5.width = canvas1.width = window.innerWidth),
  // h = (canvas5.height = canvas1.height = window.innerHeight),
  w = (canvas1.width = window.innerWidth),
  h = (canvas1.height = window.innerHeight),
  hue = 50,
  starsOne = [],
  countOne = 0,
  maxStarsOne = 500,
  starsTwo = [],
  countTwo = 0,
  maxStarsTwo = 214;

let canvas2 = document.createElement("canvas"),
  ctx2 = canvas2.getContext("2d");

canvas2.width = 100;
canvas2.height = 100;
let half = canvas2.width / 2,
  gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, "#fff");
gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 83%)");
gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 66%)");
gradient2.addColorStop(1, "transparent");

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

// End cache

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
  var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
  return diameter / 2;
}

var Star = function (number, size) {
  this.orbitRadius = random(maxOrbit(w, h));
  // this.radius = random(5, 36);
  this.radius = random(60, this.orbitRadius) / size;
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, number);
  this.speed = random(this.orbitRadius) / 500000;
  this.alpha = random(2, 10) / 10;
  this.time = 1;
  this.startX = w * Math.random();
  this.startY = h * Math.random();
};

Star.prototype.drawOne = function () {
  // this.startX = this.startX + Math.random() * 4 - Math.random() * 2;
  // this.startY = this.startY + Math.random() * 2;
  var x = this.startX,
    y = this.startY,
    twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx5.globalAlpha = this.alpha;

  ctx5.drawImage(
    canvas2,
    x - this.radius / 2,
    y - this.radius / 2,
    // x,
    // y,
    this.radius,
    this.radius
  );
  this.timePassed += this.speed;
};

for (var i = 0; i < maxStarsOne; i++) {
  let newStar = new Star(maxStarsOne, 80);
  countOne++;
  starsOne[countOne] = newStar;
}

function animationOne() {
  ctx5.globalCompositeOperation = "source-over";
  ctx5.globalAlpha = 0.8;
  // ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
  ctx5.fillStyle = "transparent";
  ctx5.clearRect(0, 0, w, h);
  ctx5.fillRect(0, 0, w, h);

  ctx5.globalCompositeOperation = "lighter";
  for (var i = 1, l = starsOne.length; i < l; i++) {
    starsOne[i].drawOne();
  }

  window.requestAnimationFrame(animationOne);
}

// animationOne();
//
let canvas3 = document.createElement("canvas"),
  ctx3 = canvas3.getContext("2d");
canvas3.width = 100;
canvas3.height = 100;
let gradient3 = ctx3.createRadialGradient(half, half, 0, half, half, half);
gradient3.addColorStop(0.025, "#fff");
gradient3.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
gradient3.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
gradient3.addColorStop(1, "transparent");

ctx3.fillStyle = gradient3;
ctx3.beginPath();
ctx3.arc(half, half, half, 0, Math.PI * 2);
ctx3.fill();
Star.prototype.drawTwo = function () {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx1.globalAlpha = this.alpha;

  ctx1.drawImage(
    canvas3,
    x - this.radius / 2,
    y - this.radius / 2,
    // x,
    // y,
    this.radius,
    this.radius
  );
  this.timePassed += this.speed;
};

for (var i = 0; i < maxStarsTwo; i++) {
  let newStar = new Star(maxStarsTwo, 60);
  countTwo++;
  starsTwo[countTwo] = newStar;
}

function animationTwo() {
  ctx1.globalCompositeOperation = "source-over";
  ctx1.globalAlpha = 0.8;
  // ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
  ctx1.fillStyle = "transparent";
  // ctx1.clearRect(0, 0, w, h);
  ctx1.fillRect(0, 0, w, h);

  ctx1.globalCompositeOperation = "lighter";
  for (var i = 1, l = starsTwo.length; i < l; i++) {
    starsTwo[i].drawTwo();
  }

  window.requestAnimationFrame(animationTwo);
}
// animationTwo();

// draw video
let videoEle = document.createElement("video");
videoEle.src = "VIDEO/uichoko.mp4";

videoEle.play();

function drawVideo() {
  ctx1.drawImage(videoEle, 0, 0, w, 1.2 * h);
  requestAnimationFrame(drawVideo);
}
// drawVideo();

const Point = function (start_x, start_y, r, c) {
  this.x = start_x; //粒子坐标
  this.y = start_y;
  this.dis = 0; //距离目标点的距离
  this.r = r; //粒子半径
  this.color = c; //粒子颜色

  //粒子移动
  this.move = () => {
    this.x += this.v_x;
    this.y += this.v_y;

    let disX = this.target_x - this.x;
    let disY = this.target_y - this.y;
    this.dis = Math.sqrt(disX * disX + disY * disY);
  };

  //设置目标点
  this.setTarget = (x, y) => {
    this.target_x = x;
    this.target_y = y;

    let disX = this.target_x - this.x;
    let disY = this.target_y - this.y;
    this.dis = Math.sqrt(disX * disX + disY * disY);

    let speed = this.dis / 100;
    this.v_x = (speed * disX) / this.dis;
    this.v_y = (speed * disY) / this.dis;
  };

  this.draw = (ctx) => {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  };
};

// const pcvs = document.querySelector(".canvas");
// const pctx = pcvs.getContext("2d");

// //提取图片中的粒子
// //将图片分割为 (width/size) * (height/size)的多个方块，提取方块中间的像素点
// function transformImg(src) {
//   const SIZE = 3;
//   const img = new Image();
//   img.src = src;

//   return new Promise((resolve, reject) => {
//     img.addEventListener("load", () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = ((img.width / SIZE) | 0) * SIZE;
//       canvas.height = ((img.height / SIZE) | 0) * SIZE;

//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(
//         img,
//         (canvas.width - img.width) / 2,
//         (canvas.height - img.height) / 2,
//         img.width,
//         img.height
//       );

//       let imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
//       console.log(Array.from(imgdata));

//       let pointList = [];

//       pointList.width = canvas.width;
//       pointList.height = canvas.height;
//       //选取各区块中心点像素颜色
//       for (let i = 0; i < canvas.height / SIZE; i++) {
//         for (let j = 0; j < canvas.width / SIZE; j++) {
//           let y = i * SIZE + ((SIZE / 2) | 0);
//           let x = j * SIZE + ((SIZE / 2) | 0);
//           let index = y * canvas.width + x;

//           let r = imgdata[index * 4];
//           let g = imgdata[index * 4 + 1];
//           let b = imgdata[index * 4 + 2];
//           let color = `rgb(${r},${g},${b})`;

//           // console.log(j, i, x, y, index, index * 4, r, g, b);

//           if (r > 240 && g > 240 && b > 240) {
//             pointList.push({
//               x: j * SIZE,
//               y: i * SIZE,
//               r: (SIZE / 2) | 0,
//               c: color,
//             });
//           }
//         }
//       }

//       resolve(pointList);
//     });
//   });
// }

// let srcs = ["/UPLOAD/IMG/pixel/1.png"];
// let photos = []; // 存储图片
// let pointList = []; //存储粒子
// let randomPointList = []; //存储无序缓动粒子
// let promiseList = [];

// for (let src of srcs) {
//   promiseList.push(transformImg(src));
// }

// Promise.all(promiseList).then((res) => {
//   console.log(res);
//   photos = res;

//   //初始化粒子列表
//   let photo = photos[0];
//   for (let point of photo) {
//     pointList.push(
//       new Point(
//         Math.random() * pcvs.width,
//         Math.random() * pcvs.height,
//         point.r,
//         point.c
//       )
//     );
//   }

//   draw();
// });

// let interval = 0; //设置一个计时器
// let photoNo = 0; //绘制的图片下标

// function draw() {
//   pctx.fillStyle = "#000";
//   pctx.fillRect(0, 0, pcvs.width, pcvs.height);

//   //变换图片
//   if (interval % 250 == 0) {
//     let photo = photos[photoNo];
//     photoNo = (photoNo + 1) % srcs.length;

//     //图片居中绘制，计算图片左上角坐标
//     let indexX = (pcvs.width - photo.width) / 2;
//     let indexY = (pcvs.height - photo.height) / 2;

//     //若粒子列表中粒子数量小于图片粒子数量，增加对应数量粒子
//     if (pointList.length < photo.length) {
//       let addNum = photo.length - pointList.length;
//       for (let i = 0; i < addNum; i++) {
//         let newP = new Point(
//           indexX + Math.random() * photo.width,
//           indexY + Math.random() * photo.height,
//           photo[0].r,
//           "rgb(255,255,255)"
//         );
//         pointList.push(newP);
//       }
//     }

//     //否则删除一定数量粒子
//     if (pointList.length > photo.length) {
//       pointList.splice(0, pointList.length - photo.length);
//     }

//     //记录各个点的下标
//     let indexList = [];
//     for (let i = 0; i < photo.length; i++) {
//       indexList.push(i);
//     }

//     //将现有粒子与图片中的粒子随机绑定
//     for (let i = 0; i < photo.length; i++) {
//       let rIndex = (Math.random() * indexList.length) | 0;
//       let index = indexList[rIndex];
//       indexList.splice(rIndex, 1);
//       pointList[i].setTarget(indexX + photo[index].x, indexY + photo[index].y);

//       // console.log(pointList[i].x,pointList[i].y,pointList[i].target_x,pointList[i].target_y,pointList[i].r,pointList[i].color, pointList[i].dis)
//     }
//   }

//   //绘制粒子
//   for (let i = 0; i < pointList.length; i++) {
//     let point = pointList[i];

//     if (point.dis > 0.1) {
//       point.move();
//     }
//     point.draw(pctx);
//   }

//   interval += 1;

//   requestAnimationFrame(draw);
// }
const canvas = document.querySelector(".canvas");
let vh = window.innerHeight;
canvas.width = canvas.height = window.innerHeight / 2;

var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "IMG/pixel/1.png";
let width = canvas.width;
let height = canvas.height;
img.onload = function () {
  ctx.drawImage(img, 0, 0, width, height);
  //// 获取canvas画布中像素点信息：
  let imageData = ctx.getImageData(0, 0, width, height).data;

  let array = [];
  console.log(imageData);

  let number = imageData.length / 4;
  // 获取有效数量
  for (let i = 0; i < imageData.length; i += 4) {
    if (imageData[i] != 0) {
      array.push(i / 4 + 1);
      // console.log("图片读取chenggong");
    }
  }

  //去除左右相邻数据
  let c = [];
  let d = [];

  array.forEach(function (v, i, e) {
    v % 2 == 0 ? e.splice(i, 1) : e;
  });

  //去除上下相邻数据
  for (i = 0; i < array.length; i++) {
    let lang = Math.trunc(array[i] / width);
    if (lang % 2 == 0) {
      array.splice(i, 1);
    }
  }

  //

  //画点
  for (let i = 0; i < array.length; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, 0.5, 0, Math.PI * 2);

    ctx.fill();
  }
};

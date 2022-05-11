import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    var maxW = 1600;
    var maxH = 1600;

    var img = new Image("./images/final_place_8x.png");
    // img.src =;
    var iw = img.width;
    var ih = img.height;
    var scale = Math.min(maxW / iw, maxH / ih);
    var iwScaled = iw * scale;
    var ihScaled = ih * scale;
    canvas.width = iwScaled;
    canvas.height = ihScaled;
    ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
    // output.value = canvas.toDataURL("image/jpeg", 0.5);

    // const mouse = {
    //   x: 0,
    //   y: 0,
    //   width: 100,
    //   height: 100,
    //   offsetX: 10,
    //   offsetY: 10,
    // };
    // let canvasPosition = canvas.getBoundingClientRect();
    // canvas.addEventListener("mousemove", function (e) {
    //   mouse.x = e.x - canvasPosition.left;
    //   mouse.y = e.y - canvasPosition.top;
    //   console.log(mouse.x, mouse.y);
    // });

    // const imageGrid = [];

    // const myImage = new Image();
    // const cellWidth = canvas.width / 20;
    // const cellHeight = canvas.height / 30;

    // class Cell {
    //   constructor(x, y) {
    //     this.x = x;
    //     this.y = y;
    //     this.width = cellWidth;
    //     this.height = cellHeight;
    //     this.dx = 0;
    //     this.dy = 0;
    //     this.distance = 0;
    //     this.offset = 0;
    //   }
    //   update() {
    //     this.dx = mouse.x - this.x;
    //     this.dy = mouse.y - this.y;
    //     this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    //     if (this.distance > 300) this.distance = 300;
    //     this.offset = (350 - this.distance) / 100;
    //   }
    //   draw() {
    //     ctx.drawImage(
    //       myImage,
    //       this.x + (this.dx / 10) * this.offset,
    //       this.y + (this.dy / 10) * this.offset,
    //       cellWidth,
    //       cellHeight,
    //       this.x,
    //       this.y,
    //       cellWidth,
    //       cellHeight
    //     );
    //   }
    // }

    // function init() {
    //   for (let y = 0; y < canvas.height; y += cellHeight) {
    //     for (let x = 0; x < canvas.width; x += cellWidth) {
    //       imageGrid.push(new Cell(x, y));
    //     }
    //   }
    // }
    // init();

    // function animate() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   for (let i = 0; i < imageGrid.length; i++) {
    //     imageGrid[i].update();
    //     imageGrid[i].draw();
    //   }
    //   requestAnimationFrame(animate);
    // }

    // myImage.addEventListener("load", function () {
    //   console.log("loaded");
    //   animate();
    // });

    // window.addEventListener("resize", function () {
    //   canvasPosition = canvas.getBoundingClientRect();
    // });
  });
  return <canvas ref={canvasRef} {...props} />;
};
export default Canvas;

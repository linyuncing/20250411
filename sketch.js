let circles = [];
let colors = ['#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0', '#a3c4f3', '#90dbf4', '#8eecf5', '#98f5e1', '#b9fbc0'];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#fbf8cc'); // 背景顏色

  // 產生 40 個圓的初始資料
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(30, 100), // 初始大小
      color: color(random(colors)) // 從顏色列表中隨機選擇
    });
  }
}

function draw() {
  background('#fbf8cc'); // 重繪背景

  // 計算圓大小的變化幅度
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset); // 圓大小隨滑鼠變化
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}

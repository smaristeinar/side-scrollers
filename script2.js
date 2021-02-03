let bg = document.getElementById("bg");
let box = document.getElementById("box");
let obj1 = document.getElementById("obs1");
const obstacles = document.getElementById("obstacles");
let windowWidth = 800;

let score = 0;
let counter = 0;
let obCounter = 0;
let right = 0;

let jumpUp = 500;

function graivty() {
  setInterval(function () {
    if (jumpUp > 0) {
      jumpUp -= 1;
      box.style.bottom = jumpUp + "px";
    }
  }, 15);
}

// let moveObs = function(){
//   counter ++;
//   right +=10;
//   if (right > windowWidth) {
//       right = -windowWidth + "px";
//       obj1.style.right = "100px";
//       right = 0;
//     }
//   obj1.style.right = right + "px";
//   colCheck();
// }

function move() {
  setInterval(function () {
    // moveObs();
    console.log();
  }, 100);
}

let colCheck = function () {
  if (right == windowWidth - 300 && jumpUp < 400) {
    console.log("gameover");
  }
};

document.addEventListener("keyup", function (evt) {
  if (evt.key == "ArrowUp") {
    jumpUp += 30;
    box.style.bottom = jumpUp + "px";
    let Sound =  new Audio("flap.mp3");
    Sound.play();
  }
});



function createObstacle() {
  const ob = document.createElement("div");
  const obTop = document.createElement("div");
  ob.id = "ob" + obCounter;
  obTop.id = "obTop" + obCounter;
  ob.classList.add("obstacle");
  obTop.classList.add("obstacleTop");
  const obId = ob.id;
  const obTopId = obTop.id;
  const height = 50 + Math.floor(Math.random() * 200);
  const width = 10 + Math.floor(Math.random() * 20);
  ob.style.height = height + "px";
  ob.style.width = width + "px";
  const obTopHeight = 1000;

  obTop.style.bottom = height + 150 + "px";
  obTop.style.height = obTopHeight + "px";
  obTop.style.width = width + "px";

  obCounter++;
  obstacles.appendChild(ob);
  obstacles.appendChild(obTop);
  moveObstacles(obId, height, width, obTopId, obTopHeight);
}

// function createObstacleTop() {
//   const ob = document.createElement("div");
//   ob.id = "ob" + obCounter;
//   ob.classList.add("obstacleTop");
//   const obId = ob.id;
//   const height = 50 + Math.floor(Math.random() * 200);
//   const width = 10 + Math.floor(Math.random() * 20);
//   ob.style.height = height + "px";
//   ob.style.width = width + "px";

//   obCounter++;
//   obstacles.appendChild(ob);
//   moveObstacles(obId, height, width);
// }

function moveObstacles(obId, height, width, obTopId, obTopHeight) {
  let right = 0;
  let timer = setInterval(function () {
    const ob = document.getElementById(obId);
    const obTop = document.getElementById(obTopId);
    right++;
    ob.style.right = right + "px";
    obTop.style.right = right + "px";
    //testCollision(odId, height, width, timer);
    if (right == 300) {
      createObstacle();
    }
    if (right > 799) {
      ob.remove();
      obTop.remove();
      clearInterval(timer);
    }
  }, 10);
}
function keepScore () {
  setInterval(() => {
    document.getElementById("score").innerHTML = "Score: " + score;
    console.log(score);
    score++
  }, 1000);
}


// move();
graivty();
createObstacle();
keepScore();

console.log(score);


let bg = document.getElementById("bg");
let box = document.getElementById("box");
let obj1 = document.getElementById("obs1");
const obstacles = document.getElementById("obstacles");
let windowWidth = 800;

let boxinfo = box.getBoundingClientRect();
console.log(box.style.height);
let score = 0;
let counter = 0;
let obCounter = 0;
let right = 0;
let jumpUp = 300;

let gameover = false;

let Sound = new Audio("flap.mp3");
let LostSound = new Audio("gameover.wav");

function graivty() {
  setInterval(function () {
    if (jumpUp > 0 && !gameover) {
      jumpUp -= 1;
      box.style.bottom = jumpUp + "px";
    }
  }, 15);
}






document.addEventListener("keyup", function (evt) {
  if (evt.key == "ArrowUp" && !gameover) {
    jumpUp += 30;
    box.style.bottom = jumpUp + "px";

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
  const width = 40;
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


function moveObstacles(obId, height, width, obTopId, obTopHeight) {
  let right = 0;
  let timer = setInterval(function () {
    const ob = document.getElementById(obId);
    const obTop = document.getElementById(obTopId);
    if (!gameover) {
      right++;
    }

    ob.style.right = right + "px";
    obTop.style.right = right + "px";
    if (right == windowWidth - 475) {
      collision(height);
    }
    if (right == 300 && !gameover) {
      createObstacle();
    }
    if (right > 799) {
      ob.remove();
      obTop.remove();
      clearInterval(timer);
    }
  }, 10);
}
function keepScore() {
  setInterval(() => {
    document.getElementById("score").innerHTML = "Score: " + score;
    if (!gameover) {
      score++;
    }
  }, 1000);
}

let collision = function (boxheigt) {
  if (jumpUp < boxheigt) {
    console.log("lost bot");
    gameover = true;
    youLost();
  }
  if (jumpUp > boxheigt + 150) {
    gameover = true;
    console.log("lost top");
    youLost();
  }
};

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function youLost() {
  if (gameover) {
    LostSound.play();
  }
}

function restart() {
  location.reload();
}


graivty();
createObstacle();
keepScore();

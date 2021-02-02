let bg = document.getElementById("bg");
let bg2 = document.getElementById("bg2");
let box = document.getElementById("box");
let obj1 = document.getElementById("obs1");
let counter = 0;
let right = 0;
let timer = setInterval(function () {
  if (flag == true) {
    jump();
    flag = false;
  }
}, 500);
let jumpUp = 500;
let flag = false;

let jump = function () {
  //console.log("bird");
};

document.addEventListener("keyup", function (evt) {
  console.log(evt);
  switch (evt.key) {
    case "ArrowUp":
      //   setInterval(function () {
      console.log(evt);
      jumpUp += 30;
      box.style.bottom = jumpUp + "px";
      flag = true;
    
  }
});

function down() {
  setInterval(function () {
    jumpUp -= 5;
    box.style.bottom = jumpUp + "px";
    flag = true;
  }, 100);
}

jump();
down();

//move box to left. jump back to beginning
let moveObs = function(){
  counter ++;
  right +=10;
  console.log(obj1.style.height);
  if (right > screen.width) {
      right = -screen.width + "px";
      obj1.style.right = "100px";
      right = 0;

  } if (obj1.style.bottom == box.style.top) {
    //console.log("game over");

  }
  obj1.style.right = right + "px";
}

function move(){
  setInterval(function () {
    moveObs();
  }, 100);
}

move();







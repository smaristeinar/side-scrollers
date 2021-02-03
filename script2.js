let bg = document.getElementById("bg");
let box = document.getElementById("box");
let obj1 = document.getElementById("obs1");


let counter = 0;
let right = 0;

let jumpUp = 500;



function graivty() {
  setInterval(function () {
    jumpUp -= 5;
    box.style.bottom = jumpUp + "px";
  },
   100);
}


let moveObs = function(){
  counter ++;
  right +=10;
  if (right > screen.width) {
      right = -screen.width + "px";
      obj1.style.right = "100px";
      right = 0;
    } 
  obj1.style.right = right + "px";
  colCheck();
}

function move(){
  setInterval(function () {
    moveObs();
  }, 100);
}

let colCheck = function(){
    if (right == screen.width-300 && jumpUp < 400) {
        console.log("gameover");
    }
}

document.addEventListener("keyup", function (evt) {
    if (evt.key == "ArrowUp"){   
      jumpUp += 30;
      box.style.bottom = jumpUp + "px";
    }
  });



move();
graivty();







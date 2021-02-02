let bg = document.getElementById("bg");
let bg2 = document.getElementById("bg2");
let box = document.getElementById("box");
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
  console.log("bird");
};

document.addEventListener("keyup", function (evt) {
  console.log(evt);
  switch (evt.key) {
    case "ArrowUp":
      //   setInterval(function () {
      console.log(evt);
      jumpUp += 10;
      box.style.bottom = jumpUp + "px";
      flag = true;
    //   }, 500);
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
/*let movebg = function(){
    counter ++;
    right +=10;
    if (right == screen.width) {
        right = -screen.width + "px";
        

    }
    bg.style.right = right + "px";
}
 */

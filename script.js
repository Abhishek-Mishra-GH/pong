alert("JS connected!");
let ball = document.querySelector(".ball");
let board = document.querySelector(".board");
let boardBounds = board.getBoundingClientRect();

let leftPaddle = document.querySelector(".left");
let rightPaddle = document.querySelector(".right");

let x=true;
let y=true;

// user input listen
document.addEventListener("keydown", function(e) {
      console.log("key pressed!");
      if(e.key == "w") {
            movePaddle(leftPaddle, -window.innerHeight*0.1);
      } else if(e.key == "s") {
            movePaddle(leftPaddle, window.innerHeight*0.1);
      } else if(e.key == "ArrowUp") {
            movePaddle(rightPaddle, -window.innerHeight*0.1);
      } else if(e.key == "ArrowDown") {
            movePaddle(rightPaddle, window.innerHeight*0.1);
      }
});


function movePaddle(cPaddle, change) {
      let cPaddleBounds = cPaddle.getBoundingClientRect();
      
      if(cPaddleBounds.top + change >= boardBounds.top && cPaddleBounds.bottom + change <= boardBounds.bottom) {
            cPaddle.style.top = cPaddleBounds.top+change+"px";
      }

}



function moveBall() {
    let ballCord = ball.getBoundingClientRect();
    let ballTop = ballCord.top;
    let ballLeft = ballCord.left;
    let ballBottom = ballCord.bottom;
    let ballRight = ballCord.right; 

    // is ball outside bound
      // handle vertical bound
      if(ballTop <= boardBounds.top || ballBottom >= boardBounds.bottom) {
            y = !y;
      }
      // handle horizontal bound
      if(ballLeft <= boardBounds.left || ballRight >= boardBounds.right) {
            x = !x;
      }
    ball.style.top = y == true? ballTop+3+"px": ballTop-3+"px";
    ball.style.left = x == true? ballLeft+3+"px" : ballLeft-3+"px";
    requestAnimationFrame(moveBall);
 }

  requestAnimationFrame(moveBall);
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

      let leftPaddleBounds = leftPaddle.getBoundingClientRect();
      let rightPaddleBounds = rightPaddle.getBoundingClientRect();

      if(ballLeft <= leftPaddleBounds.right && ballTop+40 >= leftPaddleBounds.top && ballBottom-40 <= leftPaddleBounds.bottom) {
             x = !x;
      }

      if(ballRight >= rightPaddleBounds.left && ballTop+40 >= rightPaddleBounds.top && ballBottom-40 <= rightPaddleBounds.bottom) {
            x = !x;
      }
   

    ball.style.top = y == true? ballTop+4+"px": ballTop-4+"px";
    ball.style.left = x == true? ballLeft+4+"px" : ballLeft-4+"px";
    requestAnimationFrame(moveBall);
 }

  requestAnimationFrame(moveBall);
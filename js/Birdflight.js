//game board
let gameBoard;
let gameBoardWidth = 360;
let gameBoardHeight = 640;
let ctx;
let score;

//fågeln hopp
let velocityY = 0;
let gravity = 0.5;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdXPos = gameBoardWidth/8;
let birdYPos = gameBoardHeight/2;

let birdie = {
    x : birdXPos,
    y : birdYPos,
    width : birdWidth,
    height : birdHeight
}

window.onload = function(){
    gameBoard = document.getElementById('game-board');
    gameBoard.height = gameBoardHeight;
    gameBoard.width = gameBoardWidth;
    ctx = gameBoard.getContext('2d');

    //fågeln i spelet
    // ctx.fillStyle = "red";
    // ctx.fillRect(birdie.x, birdie.y, birdie.width, birdie.height);

    birdieImage = new Image();
    birdieImage.src = './media/Birdie.png';
    birdieImage.onload = function(){
        ctx.drawImage(birdieImage, birdie.x, birdie.y, birdie.width, birdie.height);
    }

    pipeTopImg = new Image();
    pipeTopImg.src = './media/toppipe.png';
    
    pipeBottomImg = new Image();
    pipeBottomImg.src = './media/bottompipe.png';

    // let topPipes = ctx.fillStyle = 'green';
    // ctx.fillrect(pipe.x, pipe.y, pipeWidth, pipeHeight);

    // let bottomPipes = ctx.fillStyle = 'green';
    // ctx.fillrect(pipe.x, pipe.y, pipeWidth, pipeHeight);
    

    requestAnimationFrame(updateGame);
    setInterval(placePipes, 1500);
    document.addEventListener('keydown', birdJump);
}


function updateGame (){
    requestAnimationFrame(updateGame);
    ctx.clearRect(0,0, gameBoardWidth, gameBoardHeight);


    ctx.fillstyle = 'white';
    ctx.font = '30px Jersey 10'
    ctx.fillText(score, 0,0);

    velocityY += gravity;
    birdie.y += velocityY;
    

    ctx.drawImage(birdieImage, birdie.x, birdie.y, birdie.width, birdie.height);

    for (let i = 0; i < pipesArray.length; i++){
        let pipe = pipesArray[i];
        pipe.x += velocityX * 1.5;
        ctx.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (pipe.passed && birdie.x > ){

        }
    }

    
}

//rören

let pipesArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeXPos = gameBoardWidth;
let pipeYPos = 0;

let pipeTopImg;
let pipeBottomImg;

//rörens rörelse
let velocityX = -2; // så att rören rör sig åt vänster. hastigheten.

function placePipes (){
    // längden på översta rören växlar mellan -1/4 av längden och -3/4 av länden
    let randomPipesY = pipeYPos - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let opening = gameBoardHeight/4;

    let topPipe = {
        img : pipeTopImg,
        x : pipeXPos,
        y : randomPipesY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }


    pipesArray.push(topPipe);

    let bottomPipe = {
        img : pipeBottomImg,
        x : pipeXPos,
        y : randomPipesY + pipeHeight + opening,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipesArray.push(bottomPipe);
}

function birdJump(event){
    if (event.code === 'Space'){
        velocityY = -6;
    }
  
}



// function birdDie(a, b){
//     return a.
// }

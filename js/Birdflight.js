//game board
let gameBoard;
let gameBoardWidth = 360;
let gameBoardHeight = 640;
let ctx;

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

//rören

let pipesArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeXPos = gameBoardWidth;
let pipeYPos = 0;

let pipeTopImg;
let pipeBottomImg;

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
    pipeTopImg.src = './media/Pipe.png';
    
    pipeBottomImg = new Image();
    pipeBottomImg.src = './media/Pipe.png';
    

    requestAnimationFrame(updateGame);
    setInterval(placePipes, 1500);

}

function updateGame (){
    requestAnimationFrame(updateGame);
    ctx.clearRect(0,0, gameBoardWidth, gameBoardHeight);

    ctx.drawImage(birdieImage, birdie.x, birdie.y, birdie.width, birdie.height);

    for (let i = 0; i < pipesArray.length; i++){
        let pipe = pipeArray[i];
        ctx.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    }
}

function placePipes (){
    let topPipe = {
        img : pipeTopImg,
        x : pipeXPos,
        y : pipeYPos,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }

    pipeArray.push(topPipe);
}


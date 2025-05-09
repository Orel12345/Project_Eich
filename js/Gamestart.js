let startGame = document.querySelector('#begin-game');

startGame.addEventListener('click', handleGameStart);

function handleGameStart(event) {
    event.preventDefault();


    window.location.href = 'index.html';
 
}

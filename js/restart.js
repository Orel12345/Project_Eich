let startGame = document.querySelector('#restart');

startGame.addEventListener('click', handleRestart);

function handleRestart(event) {
    event.preventDefault();


    window.location.href = 'index.html';

}

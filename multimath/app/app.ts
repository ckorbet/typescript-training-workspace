function startGame() {
    const messagesElement = document.getElementById('messages');
    const playerName: string = 'Audrey';
    logPLayer(playerName);
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}
function logPLayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
const startButton = document.querySelector('#startButton')
const nameInput = document.querySelector('#inputname')
    
const hungerCount = document.querySelector('#hunger')
const boredomCount = document.querySelector('#boredom')
const sleepyCount = document.querySelector('#sleep')

const foodButton = document.querySelector('.foodButton')
const lightsButton = document.querySelector('.lightsButton')
const playButton = document.querySelector('.playButton')

startButton.addEventListener('click', startGame)

function startGame() {
    foodButton.addEventListener('click', decrementNum) 
    lightsButton.addEventListener('click', decrementNum) 
    playButton.addEventListener('click', decrementNum) 
    interval = setInterval(increaseCount, 1000)
}

function increaseCount() {
    hungerCount.textContent =  Number(hungerCount.textContent)+1
    boredomCount.textContent = Number(boredomCount.textContent)+1
    sleepyCount.textContent = Number(sleepyCount.textContent)+1
    if (hungerCount.textContent== 11) {
        alert('GAMEOVER Cause of death: Hunger')
    }
    if (boredomCount.textContent== 11) {
        alert('GAMEOVER Cause of death: Boredom')
    }
    if (sleepyCount.textContent== 11) {
        alert('GAMEOVER Cause of Death: Sleepiness')
    }
}

 function decrementNum(e){
    if (e.target.innerText == 'Food'){
        hungerCount.textContent = hungerCount.textContent -1 > -1 ? Number(hungerCount.textContent)-1 : 0;
    }
    if (e.target.innerText == 'Play'){
        boredomCount.textContent = boredomCount.textContent -1 > -1 ? Number(boredomCount.textContent)-1 : 0;
    }
    if (e.target.innerText == 'Lights'){
        sleepyCount.textContent = sleepyCount.textContent -1 > -1 ? Number(sleepyCount.textContent)-1 : 0; 
    }
 }
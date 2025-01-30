
const timerInput = document.getElementById('timerInput')
const starterTimer = document.getElementById('startTimer')
const countdownDisplay = document.getElementById('countdownDisplay')

const counter = () =>{
    let timeRemaining = parseInt(timerInput.value)
    if (timeRemaining <= 0 || isNaN(timeRemaining)){
        return
    }
    timerInput.value = 0
    countdownDisplay.textContent= timeRemaining
    const intervalId = setInterval(() => {
        timeRemaining -=1
        countdownDisplay.textContent = timeRemaining
        if (timeRemaining <= 0){
            clearInterval(intervalId)
            countdownDisplay.textContent = 'TIME UP!'
        }
    }, 1000);  
}

starterTimer.addEventListener('click', counter)
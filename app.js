const resetBtn = document.getElementById('reset-btn');
const timer = document.getElementById('timer');
const startBtn  = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

let intervalId;
let elapsedSeconds = 0;



function getTime(){

    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;

    const h =  String(hours).padStart(2,'0')
    const m = String(minutes).padStart(2,'0')
    const s = String(seconds).padStart(2,'0')
    timer.textContent = `${h}:${m}:${s}`

}


startBtn.addEventListener('click',()=>{

    if(!intervalId){
        
        intervalId = setInterval(()=>{

            elapsedSeconds++
            getTime()
        },1000)
        // startBtn.disabled = true

    }else{
        alert('timer in session')
    }
})

stopBtn.addEventListener('click', ()=>{

    clearInterval(intervalId)
    intervalId = null
    startBtn.disabled = false;
})

resetBtn.addEventListener('click', ()=>{
    
    clearInterval(intervalId)
    intervalId = null
   elapsedSeconds = 0
    getTime()
    startBtn.disabled = false; 
})

// getTime()
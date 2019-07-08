let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');

msTens.innerHTML = 0;
msHundreds.innerHTML = 0;
secondOnes.innerHTML = 0;
secondTens.innerHTML = 0;

function startTimer(){
    let elapsedTime = 0;
    let startTime = Date.now();
    t = 10;
    
    let interval = setInterval(function() {
        if (elapsedTime/1000 <= 10){
          elapsedTime = Date.now() - startTime;
          formattedTime = (elapsedTime / 1000).toFixed(2);
          (formattedTime < 10) ? secondTens.innerHTML = 0 : secondTens.innerHTML = 1;
          (formattedTime < 10) ? secondOnes.innerHTML = formattedTime[0] : secondOnes.innerHTML = 0;
          (formattedTime < 10) ? msHundreds.innerHTML = formattedTime[2] : msHundreds.innerHTML = 0;
          (formattedTime < 10) ? msTens.innerHTML = formattedTime[3] : msTens.innerHTML = 0;
        }
    }, 10);
};

function resetTimer(){
    msTens.innerHTML = 0;
    msHundreds.innerHTML = 0;
    secondOnes.innerHTML = 0;
    secondTens.innerHTML = 0;
    clearTimeout(interval);
}



startbtn = document.querySelector('.start');
resetbtn = document.querySelector('.reset');
startbtn.addEventListener('click', startTimer);
resetbtn.addEventListener('click',resetTimer);
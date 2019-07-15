const time = document.getElementById('time');
let cronometro = time.getAttribute('pomodoroTime');
let pomodoro = 5;
let interval = 3;
let currentTime;
let rodando;
let play;

function timeRunning(type) {
  rodando = setInterval(function() {
    decrementar(cronometro);
  }, 1000);
}

function chooseType(type) {
  if(type === 'pomodoro'){
    currentTime = pomodoro
  }
  if(type === 'interval') {
    currentTime = interval
  }
  currentTime = type;
  updateDom();
}

function decrementar() {
  if(currentTime > 0) {
    currentTime = currentTime -1;
    updateDom();
  } 
  else if(currentTime === 0) {
    currentTime = 7;
  }
  else {
    clearInterval(rodando);
    //alert('Apartir de agora você tem 5 min de descanço');
  }
}

// function decrementar() {
//   if(cronometro > 0) {
//     cronometro = cronometro -1;
//     updateDom();
//   } 
//   else if(cronometro === 0) {
//     cronometro = 7;
//   }
//   else {
//     clearInterval(rodando);
//     //alert('Apartir de agora você tem 5 min de descanço');
//   }
// }

function updateDom() {
  time.innerHTML = formatTime();
}

function formatTime() {
  let minutos = Math.floor(cronometro % 3600 / 60);
  let segundos =  Math.floor(cronometro % 3600 % 60);

  return (minutos < 10 ? "0" : '') + minutos + ":" + (segundos < 10 ? "0" : "") + segundos
}

function pause() {
  console.log('cronometro');
}
function pausee() {
  console.log('cronometroa');
}

function clearr() {
  console.log('cronometrorr');
}

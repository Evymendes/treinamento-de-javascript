const time = document.getElementById('time');
let pomodoro = time.getAttribute('pomodoroTime');
let rodando = undefined;

function start() {
  rodando = setInterval(function() {
    decrementar(pomodoro);
  }, 10)
console.log(rodando)
console.log(pomodoro)
}

function decrementar() {
  if(pomodoro > 0) {
    pomodoro = pomodoro -1;
    updateDom();
  }
  else {
    clearInterval(rodando);
  }
}

function updateDom() {
  time.innerHTML = formatTime();
}

function formatTime() {
  let minutos = Math.floor(pomodoro % 3600 / 60);
  let segundos =  Math.floor(pomodoro % 3600 % 60);

  return (minutos < 10 ? "0" : '') + minutos + ":" + (segundos < 10 ? "0" : "") + segundos
}
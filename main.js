const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");
//chamando o html no javascript

//criando a rotação do relogio
const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

//logica do relogio, definindo a hora, minuto e segundos
const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

//chamando a funcao para starta o relogio
setClock();

//velocidade com que o ponteiro se move, setado para 1seg
setInterval(setClock, 1000);

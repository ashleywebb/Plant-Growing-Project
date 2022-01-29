//timer
const plantButtons = document.querySelector('body > .plantButtons')
const rose = document.querySelector ('body > .plantContainer > #blackRose')
const cactus = document.querySelector('body > .plantContainer > #blueCactus')
const peony = document.querySelector('body > .plantContainer > #rainbowPeony')
const plant1 = document.querySelector('body > .plantButtons > #plant1')
const plant2 = document.querySelector('body > .plantButtons > #plant2')
const plant3 = document.querySelector('body > .plantbuttons > #plant3')

const userPlant1 = document.querySelector('.userPlants > #userPlantBtn1 > #userPlant1')
const userPlant2 = document.querySelector('.userPlants > #userPlantBtn2 > #userPlant2')
const userPlant3 = document.querySelector('.userPlants > #userPlantBtn3 > #userPlant3')

const modal = document.querySelector('#modal');
const openEl = document.querySelector('body > .open');
const modalBtn = document.querySelector('#modal > .modal__button');


function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(minutes + ":" + seconds); //change to display.textContent once ready

    if(--timer <= 0) {
      timer = 0;
      stop;
    }
  }, 1000);
}

function timerStarts() {
  let time = 5
  display = document.querySelector('body > .countdownTimer > #countdownTimerDisplay');
  startTimer(time, display)
}

// userPlant1.addEventListener('click', timerStarts);

rose.addEventListener('click', (evt) => {
  userPlant1.setAttribute("src", "https://i.imgur.com/TVHYb5Y.png");
  userPlant2.setAttribute("src", "https://i.imgur.com/TVHYb5Y.png");
  userPlant3.setAttribute("src", "https://i.imgur.com/TVHYb5Y.png");
})

cactus.addEventListener('click', (evt) => {
  userPlant1.setAttribute("src", "https://i.imgur.com/OEBQlvu.png");
  userPlant2.setAttribute("src", "https://i.imgur.com/OEBQlvu.png");
  userPlant3.setAttribute("src", "https://i.imgur.com/OEBQlvu.png");
})

peony.addEventListener('click', (evt) => {
  userPlant1.setAttribute("src", "https://i.imgur.com/gad1THh.png");
  userPlant2.setAttribute("src", "https://i.imgur.com/gad1THh.png");
  userPlant3.setAttribute("src", "https://i.imgur.com/gad1THh.png");
})

plant1.addEventListener('click', (evt) => {
  userPlant1.remove();
  userPlant3.remove();
})

plant2.addEventListener('click', (evt) => {
  userPlant1.remove();
})

openEl.addEventListener('click', (evt) => {
  modal.classList.add('show');
  // person.hitpoints --
  // const text = document.createElement('p')
  // text.textContent = person.hitpoints
  // modal.appendChild(text)
})

modalBtn.addEventListener('click', (evt) => {
  modal.classList.remove('show')
})



// class that helps track plants health
class Plant {
  constructor(sunPoints, waterPoints, potPoints) {
    this.sunPoints = sunPoints
    this.waterPoints = waterPoints
    this.potPoints = potPoints
    this.selected = false;
  }
}

// buttons that user selects from
const plantButtons = document.querySelector('body > .plantButtons')
const rose = document.querySelector ('body > .plantContainer > #blackRose')
const cactus = document.querySelector('body > .plantContainer > #blueCactus')
const peony = document.querySelector('body > .plantContainer > #rainbowPeony')
const plant1 = document.querySelector('body > .plantButtons > #plant1')
const plant2 = document.querySelector('body > .plantButtons > #plant2')
const plant3 = document.querySelector('body > .plantbuttons > #plant3')

// draggable content
const sun = document.querySelector('#modal > .userElements > #sun')
const water = document.querySelector('#modal > .userElements > #water')
const pot = document.querySelector('#modal > .userElements > #pot')
let sunActivated = false;
let waterActivated = false;
let potActivated = false;

// players personal plants
const allUserPlants = document.querySelectorAll('.userPlants')
const userPlant1 = document.querySelector('.userPlants > .userPlants > #userPlant1')
const userPlant2 = document.querySelector('.userPlants > .userPlants > #userPlant2')
const userPlant3 = document.querySelector('.userPlants > .userPlants > #userPlant3')

// modal things
const modal = document.querySelector('#modal');
const openEl = document.querySelector('body > .open');
const modalBtn = document.querySelector('#modal > .modal__button');

//warnings that change
let warning1 = document.querySelector('#modal > #warning1')
let warning2 = document.querySelector('#modal > #warning2')

// assigns plants to class
let classUserPlant1 = new Plant(10, 13, 9)
let classUserPlant2 = new Plant(10, 13, 9)
let classUserPlant3 = new Plant(10, 13, 9)

// changes the warning function
// function randomNumber() {
//   let counter = Math.random();
//   return counter;
  
//   // if(counter <= 0.2) {
//   //   warning1.innerHTML = "Quick! Give a bigger pot to plant " + (Math.floor(Math.random()*3)) + "!";
//   //   warning2.innerHTML = "Quick! Give water to plant " + (Math.floor(Math.random()*3)) + "!";
//   // } else if (0.2 < counter && counter <= 0.5){
//   //   warning1.innerHTML = "Quick! Give sunlight to plant " + (Math.floor(Math.random()*3)) + "!";
//   //   warning2.innerHTML = "Quick! Give a bigger pot to plant " + (Math.floor(Math.random()*3)) + "!";
//   // } else if (0.5 < counter && counter <= 0.9){
//   //   warning1.innerHTML = "Quick! Give water to plant " + (Math.floor(Math.random()*3)) + "!";
//   //   warning2.innerHTML = "Quick! Give sunlight to plant " + (Math.floor(Math.random()*3)) + "!";
//   }

// timer functions
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
      randomNumber();
    }
  }, 1000);
}

function timerStarts() {
  let time = 10
  display = document.querySelector('body > .countdownTimer > #countdownTimerDisplay');
  startTimer(time, display)
}

// drag functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  console.log('done!')
  //  if (classUserPlant1.selected = true) {
  //   classUserPlant1.sunPoints += 5;
  //   console.log(classUserPlant1.sunPoints);
  //   classUserPlant1.selected = false;
  //   console.log(classUserPlant1.selected);
  //  }
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e){
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
}

// openEl.addEventListener('click', timerStarts);

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
  timerStarts;
  modal.classList.add('show');
})

modalBtn.addEventListener('click', (evt) => {
  modal.classList.remove('show')
})


// sun stuff
sun.addEventListener('dragstart', (evt) => {
  dragStart;
  sunActivated = true;
});

sun.addEventListener('dragend', (evt) => {
  dragEnd;
  sunActivated = false;
});

// water stuff
water.addEventListener('dragstart', (evt) => {
  dragStart;
  waterActivated = true;
});

water.addEventListener('dragend', (evt) => {
  dragEnd;
  waterActivated = false;
});

// pot stuff
pot.addEventListener('dragstart', (evt) => {
  dragStart;
  potActivated = true;
});

pot.addEventListener('dragend', (evt) => {
  dragEnd;
  potActivated = false;
});


let randomNumber = Math.random();

// userplant1 drags
userPlant1.addEventListener('dragenter', (evt) => {
  dragEnter;
  console.log("Plant 1!")
  console.log(classUserPlant1.sunPoints);
  console.log(classUserPlant1.waterPoints);
  console.log(classUserPlant1.potPoints);
  randomNumber = Math.random();
  console.log(randomNumber);
   if (sunActivated = true) {
    classUserPlant1.waterPoints -= 5;
    classUserPlant1.potPoints -= 5;

    if (randomNumber <= 0.2){
    // } else if (warning2.innerHTML === "Quick! Give sunlight to plant " + (1) + "!") {
      classUserPlant1.sunPoints += 1;
    } else {
      classUserPlant1.sunPoints +=7;
    }
    
  } else if (waterActivated = true) {
    classUserPlant1.sunPoints -= 5;
    classUserPlant1.waterPoints += 7;
    classUserPlant2.potPoints -= 5;

    if(randomNumber > 0.2 && randomNumber <= 0.6){
      classUserPlant1.waterPoints += 2;
    // } else if (warning1.innerHTML === "Quick! Give water to plant " + (1) + "!"){
    //   classUserPlant1.waterPoints -= 2;
    //  }  
  } else if (potActivated = true) {
    if (randomNumber > 0.6 && randomNumber <= 0.9) {
      classUserPlant1.potPoints -= 0.5;
    // } else if (warning2.innerHTML === "Quick! Give a bigger pot to plant " + (1) + "!"){
    //   classUserPlant1.potPoints += 0.5;
    } else {
      classUserPlant1.potPoints += 7;
  }}


  }})

userPlant1.addEventListener('dragover', (evt) => {
  dragOver;
})

userPlant1.addEventListener('drop', (evt) => {
  dragDrop;
})

userPlant1.addEventListener('dragleave', (evt) => {
  dragLeave;
  console.log("Plant 1!")
  console.log(classUserPlant1.sunPoints);
  console.log(classUserPlant1.waterPoints);
  console.log(classUserPlant1.potPoints);
  let randomNumber1 = Math.random()
  if (sunActivated = true) {
    classUserPlant1.waterPoints += 5;
    classUserPlant1.potPoints += 5;
    if (randomNumber1 <= 0.2){
    // } else if (warning2.innerHTML === "Quick! Give sunlight to plant " + (1) + "!") {
      classUserPlant1.sunPoints -= 1;
    } else {
      classUserPlant1.sunPoints -=7;
    }
  } else if (waterActivated = true) {
    classUserPlant1.sunPoints += 5;
    classUserPlant1.waterPoints -= 7;
    classUserPlant2.potPoints += 5;
    if(randomNumber1 > 0.2 && randomNumber1 <= 0.6){
      classUserPlant1.waterPoints -= 2;
    // } else if (warning1.innerHTML === "Quick! Give water to plant " + (1) + "!"){
    //   classUserPlant1.waterPoints -= 2;
    //  } 
  }} else if (potActivated = true) {
    if (randomNumber1 > 0.6 && randomNumber1 <= 0.9) {
      classUserPlant1.potPoints += 0.5;
    // } else if (warning2.innerHTML === "Quick! Give a bigger pot to plant " + (1) + "!"){
    //   classUserPlant1.potPoints += 0.5;
    } else {
      classUserPlant1.potPoints -= 7;
  }
  
}})

//userplant2 drags
userPlant2.addEventListener('dragenter', (evt) => {
  dragEnter;
  console.log("plant 2!")
  console.log(classUserPlant2.sunPoints);
  console.log(classUserPlant2.waterPoints);
  console.log(classUserPlant2.potPoints);
  let randomNumber2 = Math.random()
   if (sunActivated = true) {
    if (randomNumber2 <= 0.2){
    // } else if (warning2.innerHTML === "Quick! Give sunlight to plant " + (1) + "!") {
      classUserPlant2.sunPoints += 1;
    } else {
      classUserPlant2.sunPoints +=7;
    }
    classUserPlant2.waterPoints -= 5;
    classUserPlant2.potPoints -= 5;

  } else if (waterActivated = true) {
    classUserPlant2.sunPoints -= 5;
    if(randomNumber2 > 0.2 && randomNumber2 <= 0.6){
      classUserPlant2.waterPoints += 2;
    // } else if (warning1.innerHTML === "Quick! Give water to plant " + (1) + "!"){
    //   classUserPlant1.waterPoints -= 2;
    //  } 
     classUserPlant2.waterPoints += 7;
     classUserPlant2.potPoints -= 5;
  } else if (potActivated = true) {
    if (randomNumber2 > 0.6 && randomNumber2 <= 0.9) {
      classUserPlant2.potPoints -= 0.5;
    // } else if (warning2.innerHTML === "Quick! Give a bigger pot to plant " + (1) + "!"){
    //   classUserPlant1.potPoints += 0.5;
    } else {
      classUserPlant2.potPoints += 7;
  }}

  if (classUserPlant2.sunPoints > 20) {
    console.log("Oh no! Your plant dried up :(")
  } else if (classUserPlant2.sunPoints <= 0) {
    console.log("Oh no! Your plant didn't get enough sun!")
  } else if (classUserPlant2.waterPoints > 25) {
    console.log("Oh no! Your plant drowned!")
  } else if (classUserPlant2.waterPoints <= 0) {
    console.log("Oh no! Your plant dried up :(")
  } else if (classUserPlant2.potPoints > 17) {
    console.log("Oh no! Your pot's too large! :(")
  } else if (classUserPlant2.potPoints <= 0) {
    console.log("Oh no! Your pot's too small! :(")
  }


}})

userPlant2.addEventListener('dragover', (evt) => {
  dragOver;
})

userPlant2.addEventListener('drop', (evt) => {
  dragDrop;
})

userPlant2.addEventListener('dragleave', (evt) => {
  dragLeave;
  console.log("Plant 2!")
  console.log(classUserPlant2.sunPoints);
  console.log(classUserPlant2.waterPoints);
  console.log(classUserPlant2.potPoints);
   let randomNumber3 = Math.random()
   if (sunActivated = true) {
    if (randomNumber3 <= 0.2){
    // } else if (warning2.innerHTML === "Quick! Give sunlight to plant " + (1) + "!") {
      classUserPlant2.sunPoints -= 1;
    } else {
      classUserPlant2.sunPoints -=7;
    }
    classUserPlant2.waterPoints += 5;
    classUserPlant2.potPoints += 5;

  } else if (waterActivated = true) {
    classUserPlant2.sunPoints += 5;
    if(randomNumber3 > 0.2 && randomNumber3 <= 0.6){
      classUserPlant2.waterPoints -= 2;
    // } else if (warning1.innerHTML === "Quick! Give water to plant " + (1) + "!"){
    //   classUserPlant1.waterPoints -= 2;
    //  } 
     classUserPlant2.waterPoints -= 7;
     classUserPlant2.potPoints += 5;
  } else if (potActivated = true) {
    if (randomNumber3 > 0.6 && randomNumber3 <= 0.9) {
      classUserPlant2.potPoints += 0.5;
    // } else if (warning2.innerHTML === "Quick! Give a bigger pot to plant " + (1) + "!"){
    //   classUserPlant1.potPoints += 0.5;
    } else {
      classUserPlant2.potPoints -= 7;
  }}

}})

// userplant3 drags
userPlant3.addEventListener('dragenter', (evt) => {
  dragEnter;
  console.log("Plant 3!")
  console.log(classUserPlant3.sunPoints);
  console.log(classUserPlant3.waterPoints);
  console.log(classUserPlant3.potPoints);
  let randomNumber4 = Math.random();
   if (sunActivated = true) {
    if (randomNumber4 <= 0.2){
    // } else if (warning2.innerHTML === "Quick! Give sunlight to plant " + (1) + "!") {
      classUserPlant3.sunPoints += 1;
    } else {
      classUserPlant3.sunPoints +=7;
    }
    classUserPlant3.waterPoints -= 5;
    classUserPlant3.potPoints -= 5;

  } else if (waterActivated = true) {
    classUserPlant3.sunPoints -= 5;
    if(randomNumber4 > 0.2 && randomNumber4 <= 0.6){
      classUserPlant3.waterPoints += 2;
    // } else if (warning1.innerHTML === "Quick! Give water to plant " + (1) + "!"){
    //   classUserPlant1.waterPoints -= 2;
    //  } 
     classUserPlant3.waterPoints += 7;
     classUserPlant3.potPoints -= 5;
  } else if (potActivated = true) {
    if (randomNumber4 > 0.6 && randomNumber4 <= 0.9) {
      classUserPlant3.potPoints -= 0.5;
    // } else if (warning2.innerHTML === "Quick! Give a bigger pot to plant " + (1) + "!"){
    //   classUserPlant1.potPoints += 0.5;
    } else {
      classUserPlant3.potPoints += 7;
  }}

  if (classUserPlant3.sunPoints > 20) {
    console.log("Oh no! Your plant dried up :(")
  } else if (classUserPlant3.sunPoints <= 0) {
    console.log("Oh no! Your plant didn't get enough sun!")
  } else if (classUserPlant3.waterPoints > 25) {
    console.log("Oh no! Your plant drowned!")
  } else if (classUserPlant3.waterPoints <= 0) {
    console.log("Oh no! Your plant dried up :(")
  } else if (classUserPlant3.potPoints > 17) {
    console.log("Oh no! Your pot's too large! :(")
  } else if (classUserPlant3.potPoints <= 0) {
    console.log("Oh no! Your pot's too small! :(")
  }


}})

userPlant3.addEventListener('dragover', (evt) => {
  dragOver;
})

userPlant3.addEventListener('drop', (evt) => {
  dragDrop;
  timerStarts;
})

userPlant3.addEventListener('dragleave', (evt) => {
  dragLeave;
  console.log("plant 3!")
  console.log(classUserPlant3.sunPoints);
  console.log(classUserPlant3.waterPoints);
  console.log(classUserPlant3.potPoints);
  let randomNumber5 = Math.random();
   if (sunActivated = true) {
    if (randomNumber5 <= 0.2){
    // } else if (warning2.innerHTML === "Quick! Give sunlight to plant " + (1) + "!") {
      classUserPlant3.sunPoints -= 1;
    } else {
      classUserPlant3.sunPoints -=7;
    }
    classUserPlant3.waterPoints += 5;
    classUserPlant3.potPoints += 5;

  } else if (waterActivated = true) {
    classUserPlant3.sunPoints += 5;
    if(randomNumber5 > 0.2 && randomNumber5 <= 0.6){
      classUserPlant3.waterPoints -= 2;
    // } else if (warning1.innerHTML === "Quick! Give water to plant " + (1) + "!"){
    //   classUserPlant1.waterPoints -= 2;
    //  } 
     classUserPlant3.waterPoints -= 7;
     classUserPlant3.potPoints += 5;
  } else if (potActivated = true) {
    if (randomNumber5 > 0.6 && randomNumber5 <= 0.9) {
      classUserPlant3.potPoints += 0.5;
    // } else if (warning2.innerHTML === "Quick! Give a bigger pot to plant " + (1) + "!"){
    //   classUserPlant1.potPoints += 0.5;
    } else {
      classUserPlant3.potPoints -= 7;
  }}

}})

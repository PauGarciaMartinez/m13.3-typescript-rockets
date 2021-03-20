import { Rocket } from '../models/classes/rocket.js';
import { ListTemplate } from '../models/classes/listTemplate.js';

// THE ROCKETS
let rocketUSA: Rocket = new Rocket('32WESSDS', [10, 30, 80]);
const USARocket = document.querySelector('.USA-rocket') as HTMLElement;
const USAContainer = document.querySelector('.USA-container') as HTMLDivElement;
const USAPower = document.querySelector('.USA-power') as HTMLDivElement;

let rocketURSS: Rocket = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
const URSSRocket = document.querySelector('.URSS-rocket') as HTMLElement;
const URSSContainer = document.querySelector('.URSS-container') as HTMLDivElement;
const URSSPower = document.querySelector('.URSS-power') as HTMLDivElement;

const allRockets: Rocket[] = [rocketUSA, rocketURSS];

// OUTPUT
const ul = document.querySelector('ul') as HTMLUListElement;
const output = new ListTemplate(ul);

// EVENTS
// Launcher
const launchRockets = document.querySelectorAll('.launcher-btn') as NodeListOf<HTMLButtonElement>;
launchRockets.forEach(target => {
  target.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (target.id === 'launch1') {
      createRocket(USARocket, USAContainer, USAPower);
    } else if (target.id === 'launch2') {
      createRocket(URSSRocket, URSSContainer, URSSPower);
    }
  })
})

// Engine

const boostUSA = document.querySelector('#engine1') as HTMLButtonElement;
boostUSA.addEventListener('click', (e: Event) => {
  e.preventDefault();
  if (!USARocket.classList.contains('hidden')) {
    rocketUSA.speedUp();
  }
  watchUSAPower('boost');
})

const boostURSS = document.querySelector('#engine2') as HTMLButtonElement;
boostURSS.addEventListener('click', (e: Event) => {
  e.preventDefault();
  if (!URSSRocket.classList.contains('hidden')) {
    rocketURSS.speedUp();
  }
  watchURSSPower('boost');
})

const chillUSA = document.querySelector('#engine3') as HTMLButtonElement;
chillUSA.addEventListener('click', (e: Event) => {
  e.preventDefault();
  rocketUSA.slowDown();
  watchUSAPower('chill');
})

const chillURSS = document.querySelector('#engine4') as HTMLButtonElement;
chillURSS.addEventListener('click', (e: Event) => {
  e.preventDefault();
  rocketURSS.slowDown();
  watchURSSPower('chill');
})

// Data
const infoUSA = document.querySelector('#data1') as HTMLButtonElement;
infoUSA.addEventListener('click', (e: Event) => {
  e.preventDefault();
  output.render(rocketUSA);
})

const infoURSS = document.querySelector('#data2') as HTMLButtonElement;
infoURSS.addEventListener('click', (e: Event) => {
  e.preventDefault();
  output.render(rocketURSS);
})

const infoAll = document.querySelector('#data3') as HTMLButtonElement;
infoAll.addEventListener('click', (e: Event) => {
  e.preventDefault();
  output.renderBoth(allRockets);
})

// ROCKETS CREATION
function createRocket(country: HTMLElement, container: HTMLElement, power: HTMLElement): void {
  if (country.classList.contains('hidden')) {
    country.classList.add('appear');
  }
  if (power.classList.contains('hidden')) {
    power.classList.add('appear2');
  }
  container.classList.remove('hidden');
  country.classList.remove('hidden');
  power.classList.remove('hidden');
}

// POWER DISPLAY
function watchUSAPower(type: string): void {
  const greenLight = document.querySelector('#USAgreen') as HTMLDivElement;
  const yellowLight = document.querySelector('#USAyellow') as HTMLDivElement;
  const orangeLight = document.querySelector('#USAorange') as HTMLDivElement;
  const redLight = document.querySelector('#USAred') as HTMLDivElement;

  if (type === 'boost') {
    if (rocketUSA.increments === 1) {
      greenLight.classList.remove('hidden');
      USARocket.classList.add('movingUSA');
    } else if (rocketUSA.increments === 2) {
      yellowLight.classList.remove('hidden');
      USARocket.classList.remove('movingUSA');
      USARocket.classList.add('movingUSA2');
    } else if (rocketUSA.increments === 3) {
      orangeLight.classList.remove('hidden');
      USARocket.classList.remove('movingUSA2');
      USARocket.classList.add('movingUSA3');
    } else if (rocketUSA.increments > 3) {
      redLight.classList.remove('hidden');
      USARocket.classList.remove('movingUSA3');
      USARocket.classList.add('movingUSA4');
    }
  } else if (type === 'chill') {
    if (rocketUSA.increments < 1) {
      greenLight.classList.add('hidden');
      USARocket.classList.remove('movingUSA');
    } else if (rocketUSA.increments === 1) {
      yellowLight.classList.add('hidden');
      USARocket.classList.remove('movingUSA2');
      USARocket.classList.add('movingUSA');
    } else if (rocketUSA.increments === 2) {
      orangeLight.classList.add('hidden');
      USARocket.classList.remove('movingUSA3');
      USARocket.classList.add('movingUSA2');
    } else if (rocketUSA.increments === 3) {
      redLight.classList.add('hidden');
      USARocket.classList.remove('movingUSA4');
      USARocket.classList.add('movingUSA3');
    }
  }
}

function watchURSSPower(type: string): void {
  const greenLight = document.querySelector('#URSSgreen') as HTMLDivElement;
  const yellowLight = document.querySelector('#URSSyellow') as HTMLDivElement;
  const orangeLight = document.querySelector('#URSSorange') as HTMLDivElement;
  const redLight = document.querySelector('#URSSred') as HTMLDivElement;

  if (type === 'boost') {
    if (rocketURSS.increments === 1) {
      greenLight.classList.remove('hidden');
      URSSRocket.classList.add('movingURSS');
    } else if (rocketURSS.increments === 2) {
      yellowLight.classList.remove('hidden');
      URSSRocket.classList.remove('movingURSS');
      URSSRocket.classList.add('movingURSS2');
    } else if (rocketURSS.increments === 3) {
      orangeLight.classList.remove('hidden');
      URSSRocket.classList.remove('movingURSS2');
      URSSRocket.classList.add('movingURSS3');
    } else if (rocketURSS.increments > 3) {
      redLight.classList.remove('hidden');
      URSSRocket.classList.remove('movingURSS3');
      URSSRocket.classList.add('movingURSS4');
    }
  } else if (type === 'chill') {
    if (rocketURSS.increments < 1) {
      greenLight.classList.add('hidden');
      URSSRocket.classList.remove('movingURSS');
    } else if (rocketURSS.increments === 1) {
      yellowLight.classList.add('hidden');
      URSSRocket.classList.remove('movingURSS2');
      URSSRocket.classList.add('movingURSS');
    } else if (rocketURSS.increments === 2) {
      orangeLight.classList.add('hidden');
      URSSRocket.classList.remove('movingURSS3');
      URSSRocket.classList.add('movingURSS2');
    } else if (rocketURSS.increments === 3) {
      redLight.classList.add('hidden');
      URSSRocket.classList.remove('movingURSS4');
      URSSRocket.classList.add('movingURSS3');
    }
  }
}
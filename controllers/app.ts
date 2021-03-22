import { Rocket } from '../models/classes/rocket.js';
import { infoTemplate } from '../models/classes/infoTemplate.js';
import { speedTemplate } from '../models/classes/speedTemplate.js';

// THE ROCKETS
const rocketUSA: Rocket = new Rocket('32WESSDS', [10, 30, 80]);
const USARocket = document.querySelector('.USA-rocket') as HTMLElement;
const USAPower = document.querySelector('.USA-power') as HTMLDivElement;
const USAContainer = document.querySelector('.USA-container') as HTMLDivElement;

const rocketURSS: Rocket = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
const URSSRocket = document.querySelector('.URSS-rocket') as HTMLElement;
const URSSPower = document.querySelector('.URSS-power') as HTMLDivElement;
const URSSContainer = document.querySelector('.URSS-container') as HTMLDivElement;

const allRockets: Rocket[] = [rocketUSA, rocketURSS];

// OUTPUT
const rocketsInfo = document.querySelector('.rockets-info') as HTMLUListElement;
const output = new infoTemplate(rocketsInfo);

const alertUSA = document.querySelector('.alertUSA') as HTMLDivElement;
const alertURSS = document.querySelector('.alertURSS') as HTMLDivElement;
const speedUSA = new speedTemplate(alertUSA);
const speedURSS = new speedTemplate(alertURSS);


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
const boostRockets = document.querySelectorAll('.engine-btn') as NodeListOf<HTMLButtonElement>;
boostRockets.forEach(target => {
  target.addEventListener('click', (e: Event) => { 
    e.preventDefault();
    if (target.id === 'engine1') {
      if (!USARocket.classList.contains('hidden')) {
        rocketUSA.speedUp();
      }
      watchPower(rocketUSA, 'boost');
    } else if (target.id === 'engine2') {
      if (!URSSRocket.classList.contains('hidden')) {
        rocketURSS.speedUp();
      }
      watchPower(rocketURSS, 'boost');
    } else if (target.id === 'engine3') {
      rocketUSA.slowDown();
      watchPower(rocketUSA, 'chill');
    } else if (target.id === 'engine4') {
      rocketURSS.slowDown();
      watchPower(rocketURSS, 'chill');
    }
  })
})

// Data
const infoRockets = document.querySelectorAll('.data-btn') as NodeListOf<HTMLButtonElement>;
infoRockets.forEach(target => {
  target.addEventListener('click', (e: Event) => { 
    e.preventDefault();
    if (target.id === 'data1') {
      output.render(rocketUSA);
    } else if (target.id === 'data2') {
      output.render(rocketURSS);
    } else if (target.id === 'data3') {
      output.renderBoth(allRockets);
    }
  })
})

// ROCKETS DISPLAY
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
function watchPower(rocket: Rocket, type: string): void {
  const greenLight = document.querySelector('#USAgreen') as HTMLDivElement;
  const yellowLight = document.querySelector('#USAyellow') as HTMLDivElement;
  const orangeLight = document.querySelector('#USAorange') as HTMLDivElement;
  const redLight = document.querySelector('#USAred') as HTMLDivElement;
  
  const greenLight2 = document.querySelector('#URSSgreen') as HTMLDivElement;
  const yellowLight2 = document.querySelector('#URSSyellow') as HTMLDivElement;
  const orangeLight2 = document.querySelector('#URSSorange') as HTMLDivElement;
  const redLight2 = document.querySelector('#URSSred') as HTMLDivElement;

  if (type === 'boost') {
    if (rocket.increments === 1) {
      rocket === rocketUSA ? 
      watchRocket('BOOST', greenLight, 'hidden', USARocket, 'movingUSA') : watchRocket('BOOST', greenLight2, 'hidden', URSSRocket, 'movingURSS');
    } else if (rocket.increments === 2) { 
      rocket === rocketUSA ? 
      watchRocket('BOOST', yellowLight, 'hidden', USARocket, 'movingUSA2', USARocket, 'movingUSA') : watchRocket('BOOST', yellowLight2, 'hidden', URSSRocket, 'movingURSS2', URSSRocket, 'movingURSS'); 
    } else if (rocket.increments === 3) { 
      rocket === rocketUSA ? 
      watchRocket('BOOST', orangeLight, 'hidden', USARocket, 'movingUSA3', USARocket, 'movingUSA2') : watchRocket('BOOST', orangeLight2, 'hidden', URSSRocket, 'movingURSS3', URSSRocket, 'movingURSS2'); 
    } else if (rocket.increments === 4) { 
      rocket === rocketUSA ? 
      watchRocket('BOOST', redLight, 'hidden', USARocket, 'movingUSA4', USARocket, 'movingUSA3') : watchRocket('BOOST', redLight2, 'hidden', URSSRocket, 'movingURSS4', URSSRocket, 'movingURSS3');
    } else if (rocket.increments > 4) {
      rocket === rocketUSA ? 
      speedUSA.render(rocketUSA) : speedURSS.render(rocketURSS);
    }
  } else if (type === 'chill') {
    if (rocket.increments < 1) {
      rocket === rocketUSA?
      watchRocket('CHILL', greenLight, 'hidden', USARocket, 'movingUSA') : 
      watchRocket('CHILL', greenLight2, 'hidden', URSSRocket, 'movingURSS'); 
    } else if (rocket.increments === 1) {
      rocket === rocketUSA?
      watchRocket('CHILL', yellowLight, 'hidden', USARocket, 'movingUSA2', USARocket, 'movingUSA') : watchRocket('CHILL', yellowLight2, 'hidden', URSSRocket, 'movingURSS2', URSSRocket, 'movingURSS'); 
    } else if (rocket.increments === 2) {
      rocket === rocketUSA ?
      watchRocket('CHILL', orangeLight, 'hidden', USARocket, 'movingUSA3', USARocket, 'movingUSA2') : watchRocket('CHILL', orangeLight2, 'hidden', URSSRocket, 'movingURSS3', URSSRocket, 'movingURSS2'); 
    } else if (rocket.increments === 3) {
      rocket === rocketUSA?
      watchRocket('CHILL', redLight, 'hidden', USARocket, 'movingUSA4', USARocket, 'movingUSA3') : watchRocket('CHILL', redLight2, 'hidden', URSSRocket, 'movingURSS4', URSSRocket, 'movingURSS3');
    } else if (rocket.increments === 4) {
      rocket === rocketUSA? speedUSA.erase() : speedURSS.erase();
    } else if (rocket.increments > 4) {
      rocket === rocketUSA? 
      speedUSA.render(rocket) : speedURSS.render(rocketURSS);
    }
  }
  if (rocket.power === rocket.totalPower && rocket.power != 0) {
    rocket === rocketUSA ? USARocket.classList.add('max-speedUSA') : URSSRocket.classList.add('max-speedURSS');
  } else {
    rocket === rocketUSA? USARocket.classList.remove('max-speedUSA') : URSSRocket.classList.remove('max-speedURSS');
  }
}

function watchRocket(type: string, colorLight: HTMLDivElement, visibility: string, rocket: HTMLElement, animation: string, rocket2?: HTMLElement, animation2?: string) {
  if (type === 'BOOST') {
    colorLight.classList.remove(visibility);
    rocket.classList.add(animation);
    // Optional
    rocket2!.classList.remove(animation2!);
  } else if (type === 'CHILL') {
    colorLight.classList.add(visibility);
    rocket.classList.remove(animation);
    // Optional
    rocket2!.classList.add(animation2!);
  }
}
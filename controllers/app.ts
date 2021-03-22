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
      watchURSSPower(rocketURSS, 'boost');
    } else if (target.id === 'engine3') {
      rocketUSA.slowDown();
      watchPower(rocketURSS, 'chill');
    } else if (target.id === 'engine4') {
      rocketURSS.slowDown();
      watchURSSPower(rocketURSS, 'chill');
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
      watchRocket('BOOST', greenLight, 'hidden', USARocket, 'movingUSA'); 
    } else if (rocketUSA.increments === 2) {
      watchRocket('BOOST', yellowLight, 'hidden', USARocket, 'movingUSA2', USARocket, 'movingUSA'); 
    } else if (rocketUSA.increments === 3) {
      watchRocket('BOOST', orangeLight, 'hidden', USARocket, 'movingUSA3', USARocket, 'movingUSA2'); 
    } else if (rocketUSA.increments === 4) {
      watchRocket('BOOST', redLight, 'hidden', USARocket, 'movingUSA4', USARocket, 'movingUSA3'); 

    } else if (rocket.increments > 4) {
      speedUSA.render(rocketUSA);
    }
  } else if (type === 'chill') {
    if (rocketUSA.increments < 1) {
      watchRocket('CHILL', greenLight, 'hidden', USARocket, 'movingUSA'); 
    } else if (rocketUSA.increments === 1) {
      watchRocket('CHILL', yellowLight, 'hidden', USARocket, 'movingUSA2', USARocket, 'movingUSA'); 
    } else if (rocketUSA.increments === 2) {
      watchRocket('CHILL', orangeLight, 'hidden', USARocket, 'movingUSA3', USARocket, 'movingUSA2');
    } else if (rocketUSA.increments === 3) {
      watchRocket('CHILL', redLight, 'hidden', USARocket, 'movingUSA4', USARocket, 'movingUSA3');
    } else if (rocketUSA.increments === 4) {
      speedUSA.erase();
    } else if (rocketUSA.increments > 4) {
      speedUSA.render(rocketUSA);
    }
  }
  if (rocketUSA.power === rocketUSA.totalPower && rocketUSA.power != 0) {
    USARocket.classList.add('max-speedUSA');
  } else {
    USARocket.classList.remove('max-speedUSA');
  }
}

function watchURSSPower(rocket: Rocket, type: string): void {
  const greenLight = document.querySelector('#URSSgreen') as HTMLDivElement;
  const yellowLight = document.querySelector('#URSSyellow') as HTMLDivElement;
  const orangeLight = document.querySelector('#URSSorange') as HTMLDivElement;
  const redLight = document.querySelector('#URSSred') as HTMLDivElement;

  if (type === 'boost') {
    if (rocket.increments === 1) {
      watchRocket('BOOST', greenLight, 'hidden', URSSRocket, 'movingURSS'); 
    } else if (rocketURSS.increments === 2) {
      watchRocket('BOOST', yellowLight, 'hidden', URSSRocket, 'movingURSS2', URSSRocket, 'movingURSS'); 
    } else if (rocketURSS.increments === 3) {
      watchRocket('BOOST', orangeLight, 'hidden', URSSRocket, 'movingURSS3', URSSRocket, 'movingURSS2'); 
    } else if (rocketURSS.increments === 4) {
      watchRocket('BOOST', redLight, 'hidden', URSSRocket, 'movingURSS4', URSSRocket, 'movingURSS3'); 

    } else if (rocket.increments > 4) {
      speedURSS.render(rocketURSS);
    }
  } else if (type === 'chill') {
    if (rocketURSS.increments < 1) {
      watchRocket('CHILL', greenLight, 'hidden', URSSRocket, 'movingURSS'); 
    } else if (rocketURSS.increments === 1) {
      watchRocket('CHILL', yellowLight, 'hidden', URSSRocket, 'movingURSS2', URSSRocket, 'movingURSS'); 
    } else if (rocketURSS.increments === 2) {
      watchRocket('CHILL', orangeLight, 'hidden', URSSRocket, 'movingURSS3', URSSRocket, 'movingURSS2'); 
    } else if (rocketURSS.increments === 3) {
      watchRocket('CHILL', redLight, 'hidden', URSSRocket, 'movingURSS4', URSSRocket, 'movingURSS3'); 
    } else if (rocketURSS.increments === 4) {
      speedURSS.erase();
    } else if (rocketURSS.increments > 4) {
      speedURSS.render(rocketURSS);
    }
  }
  if (rocketURSS.power === rocketURSS.totalPower && rocketURSS.power != 0) {
    URSSRocket.classList.add('max-speedURSS');
  } else {
    URSSRocket.classList.remove('max-speedURSS');
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
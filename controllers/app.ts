import { Rocket } from '../models/classes/rocket.js';
import { ListTemplate } from '../models/classes/listTemplate.js';

// THE ROCKETS
let rocketUSA: Rocket;
let rocketURSS: Rocket;

// OUTPUT
const ul = document.querySelector('ul') as HTMLUListElement;
const output = new ListTemplate(ul);


// EVENTS
// Launcher
const launchUSA = document.querySelector('#launch1') as HTMLButtonElement;
launchUSA.addEventListener('click', (e: Event) => {
  e.preventDefault();
  rocketUSA = new Rocket('32WESSDS', [10, 30, 80]);
})

const launchURSS = document.querySelector('#launch2') as HTMLButtonElement;
launchURSS.addEventListener('click', (e: Event) => {
  e.preventDefault();
  rocketURSS = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
})

// Engine
const boostUSA = document.querySelector('#engine1') as HTMLButtonElement;
boostUSA.addEventListener('click', (e: Event) => {
  e.preventDefault();
})

const boostURSS = document.querySelector('#engine2') as HTMLButtonElement;
boostURSS.addEventListener('click', (e: Event) => {
  e.preventDefault();
})

const chillUSA = document.querySelector('#engine3') as HTMLButtonElement;
chillUSA.addEventListener('click', (e: Event) => {
  e.preventDefault();
})

const chillURSS = document.querySelector('#engine4') as HTMLButtonElement;
chillURSS.addEventListener('click', (e: Event) => {
  e.preventDefault();
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
})

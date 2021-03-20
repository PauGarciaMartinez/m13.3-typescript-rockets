import { Rocket } from '../models/classes/rocket.js';
import { ListTemplate } from '../models/classes/listTemplate.js';
// THE ROCKETS
var rocketUSA = new Rocket('32WESSDS', [10, 30, 80]);
var USARocket = document.querySelector('.USA-rocket');
var rocketURSS = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
var URSSRocket = document.querySelector('.URSS-rocket');
// OUTPUT
var ul = document.querySelector('ul');
var output = new ListTemplate(ul);
// EVENTS
// Launcher
var launchUSA = document.querySelector('#launch1');
launchUSA.addEventListener('click', function (e) {
    e.preventDefault();
    createUSARocket();
});
var launchURSS = document.querySelector('#launch2');
launchURSS.addEventListener('click', function (e) {
    e.preventDefault();
    createURSSRocket();
});
// Engine
var boostUSA = document.querySelector('#engine1');
boostUSA.addEventListener('click', function (e) {
    e.preventDefault();
    if (!USARocket.classList.contains('hidden')) {
        rocketUSA.speedUp();
    }
    watchUSAPower('boost');
    console.log(rocketUSA.power);
});
var boostURSS = document.querySelector('#engine2');
boostURSS.addEventListener('click', function (e) {
    e.preventDefault();
    if (!URSSRocket.classList.contains('hidden')) {
        rocketURSS.speedUp();
    }
    watchURSSPower('boost');
    console.log(rocketURSS.power);
});
var chillUSA = document.querySelector('#engine3');
chillUSA.addEventListener('click', function (e) {
    e.preventDefault();
    rocketUSA.slowDown();
    watchUSAPower('chill');
    console.log(rocketUSA.power);
});
var chillURSS = document.querySelector('#engine4');
chillURSS.addEventListener('click', function (e) {
    e.preventDefault();
    rocketURSS.slowDown();
    watchURSSPower('chill');
    console.log(rocketURSS.power);
});
// Data
var infoUSA = document.querySelector('#data1');
infoUSA.addEventListener('click', function (e) {
    e.preventDefault();
    output.render(rocketUSA);
});
var infoURSS = document.querySelector('#data2');
infoURSS.addEventListener('click', function (e) {
    e.preventDefault();
    output.render(rocketURSS);
});
var infoAll = document.querySelector('#data3');
infoAll.addEventListener('click', function (e) {
    e.preventDefault();
    var allRockets = [rocketUSA, rocketURSS];
    output.renderBoth(allRockets);
});
// ROCKETS CREATION
function createUSARocket() {
    var USAContainer = document.querySelector('.USA-container');
    var USAPower = document.querySelector('.USA-power');
    if (USARocket.classList.contains('hidden')) {
        USARocket.classList.add('appear');
    }
    if (USAPower.classList.contains('hidden')) {
        USAPower.classList.add('appear2');
    }
    USAContainer.classList.remove('hidden');
    USARocket.classList.remove('hidden');
    USAPower.classList.remove('hidden');
}
function createURSSRocket() {
    var URSSContainer = document.querySelector('.URSS-container');
    var URSSPower = document.querySelector('.URSS-power');
    if (URSSRocket.classList.contains('hidden')) {
        URSSRocket.classList.add('appear');
    }
    if (URSSPower.classList.contains('hidden')) {
        URSSPower.classList.add('appear2');
    }
    URSSContainer.classList.remove('hidden');
    URSSRocket.classList.remove('hidden');
    URSSPower.classList.remove('hidden');
}
// POWER CREATION
function watchUSAPower(type) {
    var greenLight = document.querySelector('#USAgreen');
    var yellowLight = document.querySelector('#USAyellow');
    var orangeLight = document.querySelector('#USAorange');
    var redLight = document.querySelector('#USAred');
    if (type === 'boost') {
        if (rocketUSA.increments === 1) {
            greenLight.classList.remove('hidden');
            USARocket.classList.add('movingUSA');
        }
        else if (rocketUSA.increments === 2) {
            yellowLight.classList.remove('hidden');
            USARocket.classList.remove('movingUSA');
            USARocket.classList.add('movingUSA2');
        }
        else if (rocketUSA.increments === 3) {
            orangeLight.classList.remove('hidden');
            USARocket.classList.remove('movingUSA2');
            USARocket.classList.add('movingUSA3');
        }
        else if (rocketUSA.increments > 3) {
            redLight.classList.remove('hidden');
            USARocket.classList.remove('movingUSA3');
            USARocket.classList.add('movingUSA4');
        }
    }
    else if (type === 'chill') {
        if (rocketUSA.increments < 1) {
            greenLight.classList.add('hidden');
        }
        else if (rocketUSA.increments === 1) {
            yellowLight.classList.add('hidden');
        }
        else if (rocketUSA.increments === 2) {
            orangeLight.classList.add('hidden');
        }
        else if (rocketUSA.increments === 3) {
            redLight.classList.add('hidden');
        }
    }
}
function watchURSSPower(type) {
    var greenLight = document.querySelector('#URSSgreen');
    var yellowLight = document.querySelector('#URSSyellow');
    var orangeLight = document.querySelector('#URSSorange');
    var redLight = document.querySelector('#URSSred');
    if (type === 'boost') {
        if (rocketURSS.increments === 1) {
            greenLight.classList.remove('hidden');
            URSSRocket.classList.add('movingURSS');
        }
        else if (rocketURSS.increments === 2) {
            yellowLight.classList.remove('hidden');
        }
        else if (rocketURSS.increments === 3) {
            orangeLight.classList.remove('hidden');
        }
        else if (rocketURSS.increments > 3) {
            redLight.classList.remove('hidden');
        }
    }
    else if (type === 'chill') {
        if (rocketURSS.increments < 1) {
            greenLight.classList.add('hidden');
        }
        else if (rocketURSS.increments === 1) {
            yellowLight.classList.add('hidden');
        }
        else if (rocketURSS.increments === 2) {
            orangeLight.classList.add('hidden');
        }
        else if (rocketURSS.increments === 3) {
            redLight.classList.add('hidden');
        }
    }
}

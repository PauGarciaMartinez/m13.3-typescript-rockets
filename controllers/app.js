import { Rocket } from '../models/classes/rocket.js';
import { ListTemplate } from '../models/classes/listTemplate.js';
// THE ROCKETS
var rocketUSA = new Rocket('32WESSDS', [10, 30, 80]);
var USARocket = document.querySelector('.USA-rocket');
var USAContainer = document.querySelector('.USA-container');
var USAPower = document.querySelector('.USA-power');
var rocketURSS = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
var URSSRocket = document.querySelector('.URSS-rocket');
var URSSContainer = document.querySelector('.URSS-container');
var URSSPower = document.querySelector('.URSS-power');
var allRockets = [rocketUSA, rocketURSS];
// OUTPUT
var ul = document.querySelector('ul');
var output = new ListTemplate(ul);
// EVENTS
// Launcher
var launchRockets = document.querySelectorAll('.launcher-btn');
launchRockets.forEach(function (target) {
    target.addEventListener('click', function (e) {
        e.preventDefault();
        if (target.id === 'launch1') {
            createRocket(USARocket, USAContainer, USAPower);
        }
        else if (target.id === 'launch2') {
            createRocket(URSSRocket, URSSContainer, URSSPower);
        }
    });
});
// Engine
var boostUSA = document.querySelector('#engine1');
boostUSA.addEventListener('click', function (e) {
    e.preventDefault();
    if (!USARocket.classList.contains('hidden')) {
        rocketUSA.speedUp();
    }
    watchUSAPower('boost');
});
var boostURSS = document.querySelector('#engine2');
boostURSS.addEventListener('click', function (e) {
    e.preventDefault();
    if (!URSSRocket.classList.contains('hidden')) {
        rocketURSS.speedUp();
    }
    watchURSSPower('boost');
});
var chillUSA = document.querySelector('#engine3');
chillUSA.addEventListener('click', function (e) {
    e.preventDefault();
    rocketUSA.slowDown();
    watchUSAPower('chill');
});
var chillURSS = document.querySelector('#engine4');
chillURSS.addEventListener('click', function (e) {
    e.preventDefault();
    rocketURSS.slowDown();
    watchURSSPower('chill');
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
    output.renderBoth(allRockets);
});
// ROCKETS CREATION
function createRocket(country, container, power) {
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
            USARocket.classList.remove('movingUSA');
        }
        else if (rocketUSA.increments === 1) {
            yellowLight.classList.add('hidden');
            USARocket.classList.remove('movingUSA2');
            USARocket.classList.add('movingUSA');
        }
        else if (rocketUSA.increments === 2) {
            orangeLight.classList.add('hidden');
            USARocket.classList.remove('movingUSA3');
            USARocket.classList.add('movingUSA2');
        }
        else if (rocketUSA.increments === 3) {
            redLight.classList.add('hidden');
            USARocket.classList.remove('movingUSA4');
            USARocket.classList.add('movingUSA3');
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
            URSSRocket.classList.remove('movingURSS');
            URSSRocket.classList.add('movingURSS2');
        }
        else if (rocketURSS.increments === 3) {
            orangeLight.classList.remove('hidden');
            URSSRocket.classList.remove('movingURSS2');
            URSSRocket.classList.add('movingURSS3');
        }
        else if (rocketURSS.increments > 3) {
            redLight.classList.remove('hidden');
            URSSRocket.classList.remove('movingURSS3');
            URSSRocket.classList.add('movingURSS4');
        }
    }
    else if (type === 'chill') {
        if (rocketURSS.increments < 1) {
            greenLight.classList.add('hidden');
            URSSRocket.classList.remove('movingURSS');
        }
        else if (rocketURSS.increments === 1) {
            yellowLight.classList.add('hidden');
            URSSRocket.classList.remove('movingURSS2');
            URSSRocket.classList.add('movingURSS');
        }
        else if (rocketURSS.increments === 2) {
            orangeLight.classList.add('hidden');
            URSSRocket.classList.remove('movingURSS3');
            URSSRocket.classList.add('movingURSS2');
        }
        else if (rocketURSS.increments === 3) {
            redLight.classList.add('hidden');
            URSSRocket.classList.remove('movingURSS4');
            URSSRocket.classList.add('movingURSS3');
        }
    }
}

import { Rocket } from '../models/classes/rocket.js';
import { infoTemplate } from '../models/classes/infoTemplate.js';
import { speedTemplate } from '../models/classes/speedTemplate.js';
// THE ROCKETS
var rocketUSA = new Rocket('32WESSDS', [10, 30, 80]);
var USARocket = document.querySelector('.USA-rocket');
var USAPower = document.querySelector('.USA-power');
var USAContainer = document.querySelector('.USA-container');
var rocketURSS = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
var URSSRocket = document.querySelector('.URSS-rocket');
var URSSPower = document.querySelector('.URSS-power');
var URSSContainer = document.querySelector('.URSS-container');
var allRockets = [rocketUSA, rocketURSS];
// OUTPUT
var rocketsInfo = document.querySelector('.rockets-info');
var output = new infoTemplate(rocketsInfo);
var alertUSA = document.querySelector('.alertUSA');
var alertURSS = document.querySelector('.alertURSS');
var speedUSA = new speedTemplate(alertUSA);
var speedURSS = new speedTemplate(alertURSS);
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
var boostRockets = document.querySelectorAll('.engine-btn');
boostRockets.forEach(function (target) {
    target.addEventListener('click', function (e) {
        e.preventDefault();
        if (target.id === 'engine1') {
            if (!USARocket.classList.contains('hidden')) {
                rocketUSA.speedUp();
            }
            watchUSAPower('boost');
        }
        else if (target.id === 'engine2') {
            if (!URSSRocket.classList.contains('hidden')) {
                rocketURSS.speedUp();
            }
            watchURSSPower('boost');
        }
        else if (target.id === 'engine3') {
            rocketUSA.slowDown();
            watchUSAPower('chill');
        }
        else if (target.id === 'engine4') {
            rocketURSS.slowDown();
            watchURSSPower('chill');
        }
    });
});
// Data
var infoRockets = document.querySelectorAll('.data-btn');
infoRockets.forEach(function (target) {
    target.addEventListener('click', function (e) {
        e.preventDefault();
        if (target.id === 'data1') {
            output.render(rocketUSA);
        }
        else if (target.id === 'data2') {
            output.render(rocketURSS);
        }
        else if (target.id === 'data3') {
            output.renderBoth(allRockets);
        }
    });
});
// ROCKETS DISPLAY
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
        else if (rocketUSA.increments === 4) {
            redLight.classList.remove('hidden');
            USARocket.classList.remove('movingUSA3');
            USARocket.classList.add('movingUSA4');
        }
        else if (rocketUSA.increments > 4) {
            speedUSA.render(rocketUSA);
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
        else if (rocketUSA.increments === 4) {
            speedUSA.erase();
        }
        else if (rocketUSA.increments > 4) {
            speedUSA.render(rocketUSA);
        }
    }
    if (rocketUSA.power === rocketUSA.totalPower && rocketUSA.power != 0) {
        USARocket.classList.add('max-speedUSA');
    }
    else {
        USARocket.classList.remove('max-speedUSA');
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
        else if (rocketURSS.increments === 4) {
            redLight.classList.remove('hidden');
            URSSRocket.classList.remove('movingURSS3');
            URSSRocket.classList.add('movingURSS4');
        }
        else if (rocketURSS.increments > 4) {
            speedURSS.render(rocketURSS);
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
        else if (rocketURSS.increments === 4) {
            speedURSS.erase();
        }
        else if (rocketURSS.increments > 4) {
            speedURSS.render(rocketURSS);
        }
    }
    if (rocketURSS.power === rocketURSS.totalPower && rocketURSS.power != 0) {
        URSSRocket.classList.add('max-speedURSS');
    }
    else {
        URSSRocket.classList.remove('max-speedURSS');
    }
}

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
            watchPower(rocketUSA, 'boost');
        }
        else if (target.id === 'engine2') {
            if (!URSSRocket.classList.contains('hidden')) {
                rocketURSS.speedUp();
            }
            watchURSSPower(rocketURSS, 'boost');
        }
        else if (target.id === 'engine3') {
            rocketUSA.slowDown();
            watchPower(rocketURSS, 'chill');
        }
        else if (target.id === 'engine4') {
            rocketURSS.slowDown();
            watchURSSPower(rocketURSS, 'chill');
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
function watchPower(rocket, type) {
    var greenLight = document.querySelector('#USAgreen');
    var yellowLight = document.querySelector('#USAyellow');
    var orangeLight = document.querySelector('#USAorange');
    var redLight = document.querySelector('#USAred');
    var greenLight2 = document.querySelector('#URSSgreen');
    var yellowLight2 = document.querySelector('#URSSyellow');
    var orangeLight2 = document.querySelector('#URSSorange');
    var redLight2 = document.querySelector('#URSSred');
    if (type === 'boost') {
        if (rocket.increments === 1) {
            watchRocket('BOOST', greenLight, 'hidden', USARocket, 'movingUSA');
        }
        else if (rocketUSA.increments === 2) {
            watchRocket('BOOST', yellowLight, 'hidden', USARocket, 'movingUSA2', USARocket, 'movingUSA');
        }
        else if (rocketUSA.increments === 3) {
            watchRocket('BOOST', orangeLight, 'hidden', USARocket, 'movingUSA3', USARocket, 'movingUSA2');
        }
        else if (rocketUSA.increments === 4) {
            watchRocket('BOOST', redLight, 'hidden', USARocket, 'movingUSA4', USARocket, 'movingUSA3');
        }
        else if (rocket.increments > 4) {
            speedUSA.render(rocketUSA);
        }
    }
    else if (type === 'chill') {
        if (rocketUSA.increments < 1) {
            watchRocket('CHILL', greenLight, 'hidden', USARocket, 'movingUSA');
        }
        else if (rocketUSA.increments === 1) {
            watchRocket('CHILL', yellowLight, 'hidden', USARocket, 'movingUSA2', USARocket, 'movingUSA');
        }
        else if (rocketUSA.increments === 2) {
            watchRocket('CHILL', orangeLight, 'hidden', USARocket, 'movingUSA3', USARocket, 'movingUSA2');
        }
        else if (rocketUSA.increments === 3) {
            watchRocket('CHILL', redLight, 'hidden', USARocket, 'movingUSA4', USARocket, 'movingUSA3');
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
function watchURSSPower(rocket, type) {
    var greenLight = document.querySelector('#URSSgreen');
    var yellowLight = document.querySelector('#URSSyellow');
    var orangeLight = document.querySelector('#URSSorange');
    var redLight = document.querySelector('#URSSred');
    if (type === 'boost') {
        if (rocket.increments === 1) {
            watchRocket('BOOST', greenLight, 'hidden', URSSRocket, 'movingURSS');
        }
        else if (rocketURSS.increments === 2) {
            watchRocket('BOOST', yellowLight, 'hidden', URSSRocket, 'movingURSS2', URSSRocket, 'movingURSS');
        }
        else if (rocketURSS.increments === 3) {
            watchRocket('BOOST', orangeLight, 'hidden', URSSRocket, 'movingURSS3', URSSRocket, 'movingURSS2');
        }
        else if (rocketURSS.increments === 4) {
            watchRocket('BOOST', redLight, 'hidden', URSSRocket, 'movingURSS4', URSSRocket, 'movingURSS3');
        }
        else if (rocket.increments > 4) {
            speedURSS.render(rocketURSS);
        }
    }
    else if (type === 'chill') {
        if (rocketURSS.increments < 1) {
            watchRocket('CHILL', greenLight, 'hidden', URSSRocket, 'movingURSS');
        }
        else if (rocketURSS.increments === 1) {
            watchRocket('CHILL', yellowLight, 'hidden', URSSRocket, 'movingURSS2', URSSRocket, 'movingURSS');
        }
        else if (rocketURSS.increments === 2) {
            watchRocket('CHILL', orangeLight, 'hidden', URSSRocket, 'movingURSS3', URSSRocket, 'movingURSS2');
        }
        else if (rocketURSS.increments === 3) {
            watchRocket('CHILL', redLight, 'hidden', URSSRocket, 'movingURSS4', URSSRocket, 'movingURSS3');
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
function watchRocket(type, colorLight, visibility, rocket, animation, rocket2, animation2) {
    if (type === 'BOOST') {
        colorLight.classList.remove(visibility);
        rocket.classList.add(animation);
        // Optional
        rocket2.classList.remove(animation2);
    }
    else if (type === 'CHILL') {
        colorLight.classList.add(visibility);
        rocket.classList.remove(animation);
        // Optional
        rocket2.classList.add(animation2);
    }
}

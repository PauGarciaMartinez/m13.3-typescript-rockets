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
            watchPower(rocketURSS, 'boost');
        }
        else if (target.id === 'engine3') {
            rocketUSA.slowDown();
            watchPower(rocketUSA, 'chill');
        }
        else if (target.id === 'engine4') {
            rocketURSS.slowDown();
            watchPower(rocketURSS, 'chill');
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
            rocket === rocketUSA ?
                watchRocket('BOOST', greenLight, 'hidden', USARocket, 'movingUSA') : watchRocket('BOOST', greenLight2, 'hidden', URSSRocket, 'movingURSS');
        }
        else if (rocket.increments === 2) {
            rocket === rocketUSA ?
                watchRocket('BOOST', yellowLight, 'hidden', USARocket, 'movingUSA2', USARocket, 'movingUSA') : watchRocket('BOOST', yellowLight2, 'hidden', URSSRocket, 'movingURSS2', URSSRocket, 'movingURSS');
        }
        else if (rocket.increments === 3) {
            rocket === rocketUSA ?
                watchRocket('BOOST', orangeLight, 'hidden', USARocket, 'movingUSA3', USARocket, 'movingUSA2') : watchRocket('BOOST', orangeLight2, 'hidden', URSSRocket, 'movingURSS3', URSSRocket, 'movingURSS2');
        }
        else if (rocket.increments === 4) {
            rocket === rocketUSA ?
                watchRocket('BOOST', redLight, 'hidden', USARocket, 'movingUSA4', USARocket, 'movingUSA3') : watchRocket('BOOST', redLight2, 'hidden', URSSRocket, 'movingURSS4', URSSRocket, 'movingURSS3');
        }
        else if (rocket.increments > 4) {
            rocket === rocketUSA ?
                speedUSA.render(rocketUSA) : speedURSS.render(rocketURSS);
        }
    }
    else if (type === 'chill') {
        if (rocket.increments < 1) {
            rocket === rocketUSA ?
                watchRocket('CHILL', greenLight, 'hidden', USARocket, 'movingUSA') :
                watchRocket('CHILL', greenLight2, 'hidden', URSSRocket, 'movingURSS');
        }
        else if (rocket.increments === 1) {
            rocket === rocketUSA ?
                watchRocket('CHILL', yellowLight, 'hidden', USARocket, 'movingUSA2', USARocket, 'movingUSA') : watchRocket('CHILL', yellowLight2, 'hidden', URSSRocket, 'movingURSS2', URSSRocket, 'movingURSS');
        }
        else if (rocket.increments === 2) {
            rocket === rocketUSA ?
                watchRocket('CHILL', orangeLight, 'hidden', USARocket, 'movingUSA3', USARocket, 'movingUSA2') : watchRocket('CHILL', orangeLight2, 'hidden', URSSRocket, 'movingURSS3', URSSRocket, 'movingURSS2');
        }
        else if (rocket.increments === 3) {
            rocket === rocketUSA ?
                watchRocket('CHILL', redLight, 'hidden', USARocket, 'movingUSA4', USARocket, 'movingUSA3') : watchRocket('CHILL', redLight2, 'hidden', URSSRocket, 'movingURSS4', URSSRocket, 'movingURSS3');
        }
        else if (rocket.increments === 4) {
            rocket === rocketUSA ? speedUSA.erase() : speedURSS.erase();
        }
        else if (rocket.increments > 4) {
            rocket === rocketUSA ?
                speedUSA.render(rocket) : speedURSS.render(rocketURSS);
        }
    }
    if (rocket.power === rocket.totalPower && rocket.power != 0) {
        rocket === rocketUSA ? USARocket.classList.add('max-speedUSA') : URSSRocket.classList.add('max-speedURSS');
    }
    else {
        rocket === rocketUSA ? USARocket.classList.remove('max-speedUSA') : URSSRocket.classList.remove('max-speedURSS');
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

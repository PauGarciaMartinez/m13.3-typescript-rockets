import { Rocket } from '../models/classes/rocket.js';
import { ListTemplate } from '../models/classes/listTemplate.js';
// THE ROCKETS
var rocketUSA = new Rocket('32WESSDS', [10, 30, 80]);
var rocketURSS = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
// OUTPUT
var ul = document.querySelector('ul');
var output = new ListTemplate(ul);
// EVENTS
// Launcher
var launchUSA = document.querySelector('#launch1');
launchUSA.addEventListener('click', function (e) {
    e.preventDefault();
});
var launchURSS = document.querySelector('#launch2');
launchURSS.addEventListener('click', function (e) {
    e.preventDefault();
});
// Engine
var boostUSA = document.querySelector('#engine1');
boostUSA.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(rocketUSA.speedUp());
});
var boostURSS = document.querySelector('#engine2');
boostURSS.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(rocketURSS.speedUp());
});
var chillUSA = document.querySelector('#engine3');
chillUSA.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(rocketUSA.slowDown());
});
var chillURSS = document.querySelector('#engine4');
chillURSS.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(rocketURSS.slowDown());
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

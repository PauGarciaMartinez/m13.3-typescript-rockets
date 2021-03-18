import { Rocket } from '../models/classes/rocket.js';
import { ListTemplate } from '../models/classes/listTemplate.js';
// THE ROCKETS
var rocketUSA;
var rocketURSS;
// OUTPUT
var ul = document.querySelector('ul');
var output = new ListTemplate(ul);
// EVENTS
// Launcher
var launchUSA = document.querySelector('#launch1');
launchUSA.addEventListener('click', function (e) {
    e.preventDefault();
    rocketUSA = new Rocket('32WESSDS', [10, 30, 80]);
});
var launchURSS = document.querySelector('#launch2');
launchURSS.addEventListener('click', function (e) {
    e.preventDefault();
    rocketURSS = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
});
// Engine
var boostUSA = document.querySelector('#engine1');
boostUSA.addEventListener('click', function (e) {
    e.preventDefault();
});
var boostURSS = document.querySelector('#engine2');
boostURSS.addEventListener('click', function (e) {
    e.preventDefault();
});
var chillUSA = document.querySelector('#engine3');
chillUSA.addEventListener('click', function (e) {
    e.preventDefault();
});
var chillURSS = document.querySelector('#engine4');
chillURSS.addEventListener('click', function (e) {
    e.preventDefault();
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
});

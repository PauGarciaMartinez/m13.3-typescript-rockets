import { Rocket } from '../models/classes/rocket.js';
import { ListTemplate } from '../models/classes/listTemplate.js';
// THE ROCKETS
var rocketUSA = new Rocket('32WESSDS', [10, 30, 80]);
var rocketURSS = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);
// OUTPUT
var ul = document.querySelector('ul');
var output = new ListTemplate(ul);
/* output.render(rocketUSA);
output.render(rocketURSS);

console.log(rocketURSS.calcTotalPower()); */
// EVENTS

import { Rocket } from '../models/classes/rocket.js';
import { ListTemplate } from '../models/classes/listTemplate.js';

// THE ROCKETS
const rocketUSA: Rocket = new Rocket('32WESSDS', [10, 30, 80]);
const rocketURSS: Rocket = new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]);

// OUTPUT
const ul = document.querySelector('ul') as HTMLUListElement;
const output = new ListTemplate(ul);

/* output.render(rocketUSA);
output.render(rocketURSS);

console.log(rocketURSS.calcTotalPower()); */

// EVENTS

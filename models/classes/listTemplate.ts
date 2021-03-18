import { Rocket } from "./rocket";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(rocket: Rocket) {
    const li = document.createElement('li');
    li.innerText = 'Output:';

    const rocketInfo = document.createElement('p');
    rocketInfo.innerText = `${rocket.id}: ${rocket.propellant.toString()}`;

    li.append(rocketInfo);
    this.container.append(li);
  }
}
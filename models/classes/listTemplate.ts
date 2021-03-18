import { Rocket } from "./rocket";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(rocket: Rocket) {

    const rocketInfo = document.createElement('p');
    rocketInfo.innerText = `Rocket ${rocket.id} boosters max speed: ${rocket.propellant.toString()}`;

    this.container.append(rocketInfo);
  }
}
import { Rocket } from "./rocket";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(rocket: Rocket) {

    const rocketInfo = document.createElement('p');
    rocketInfo.innerHTML = `Rocket <strong>${rocket.id}</strong> boosters max speed: <strong>${rocket.boosters.toString()}</strong>`;

    this.container.append(rocketInfo);
  }
}
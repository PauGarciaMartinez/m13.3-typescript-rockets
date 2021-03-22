import { Rocket } from "./rocket";

export class infoTemplate {
  constructor(private container: HTMLUListElement) {}

  render(rocket: Rocket) {
    this.container.innerHTML = '';
    this.container.innerHTML = `<p>Rocket <strong>${rocket.id}</strong> boosters max speed: <strong>${rocket.boosters.toString()}</strong></p>`;
  }
  renderBoth(rocket: Rocket[]) {

    this.container.innerHTML = '';

    rocket.forEach(rocket => {
      const rocketInfo: HTMLParagraphElement = document.createElement('p');
      rocketInfo.innerHTML = `Rocket <strong>${rocket.id}</strong> boosters max speed: <strong>${rocket.boosters.toString()}</strong>`;
  
      this.container.append(rocketInfo);
    })
  }
}
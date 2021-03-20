import { Rocket } from "./rocket";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(rocket: Rocket) {

    if (this.container.classList.contains('full')) {
      while (this.container.hasChildNodes()) {  
        this.container.removeChild(this.container.firstChild!);
      }
      this.container.classList.remove('full');
    }

    const rocketInfo: HTMLParagraphElement = document.createElement('p');
    rocketInfo.innerHTML = `Rocket <strong>${rocket.id}</strong> boosters max speed: <strong>${rocket.boosters.toString()}</strong>. <br>Actual speed: <strong>${rocket.power}</strong>`;

    this.container.append(rocketInfo);
    this.container.classList.add('full');
  }
  renderBoth(rocket: Rocket[]) {

    if (this.container.classList.contains('full')) {
      while (this.container.hasChildNodes()) {  
        this.container.removeChild(this.container.firstChild!);
      }
      this.container.classList.remove('full');
    }

    rocket.forEach(rocket => {
      const rocketInfo: HTMLParagraphElement = document.createElement('p');
      rocketInfo.innerHTML = `Rocket <strong>${rocket.id}</strong> boosters max speed: <strong>${rocket.boosters.toString()}</strong>. <br>Actual speed: <strong>${rocket.power}</strong>`;
  
      this.container.append(rocketInfo);
    })

    this.container.classList.add('full');
  }
}
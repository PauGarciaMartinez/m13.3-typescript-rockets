import { Rocket } from "./rocket";

export class speedTemplate {
  constructor(private container: HTMLDivElement) {}

  render(rocket: Rocket) {
    this.container.innerHTML = '';

    this.container.innerHTML = `<p><strong>ALERT</strong><br>Current speed: <strong>${rocket.power}</strong></p>`;

    if (rocket.power === rocket.totalPower) {
      const maxSpeed: HTMLParagraphElement = document.createElement('p');
      maxSpeed.classList.add('alert-max');
      maxSpeed.innerHTML = `<strong>MAX SPEED</strong>`;
      this.container.append(maxSpeed);
    } 
  }
  erase() {
    this.container.innerHTML = '';
  }
}

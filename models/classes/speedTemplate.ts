import { Rocket } from "./rocket";

export class speedTemplate {
  constructor(private container: HTMLDivElement) {}

  render(rocket: Rocket) {
    if (this.container.classList.contains('full')) {
      while (this.container.hasChildNodes()) {  
        this.container.removeChild(this.container.firstChild!);
      }
      this.container.classList.remove('full');
    }
    const speedInfo: HTMLParagraphElement = document.createElement('p');
    speedInfo.innerHTML = `<strong>ALERT</strong><br>Current speed: <strong>${rocket.power}</strong>`;
    this.container.append(speedInfo);

    if (rocket.power === rocket.totalPower) {
      const maxSpeed: HTMLParagraphElement = document.createElement('p');
      maxSpeed.innerHTML = `<strong>MAX SPEED</strong>`;
      this.container.append(maxSpeed);
    } 

    this.container.classList.add('full');
  }
  erase() {
    while (this.container.hasChildNodes()) {  
      this.container.removeChild(this.container.firstChild!);
    }
  }
}

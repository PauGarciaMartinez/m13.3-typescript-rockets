import { Rocket } from "./rocket";

export class speedTemplate {
  constructor(private container: NodeListOf<HTMLDivElement>) {}

  render(rocket: Rocket) {
    this.container.forEach(item => {
      if (item.id === 'speedUSA') {
        if (item.classList.contains('full')) {
          while (item.hasChildNodes()) {  
            item.removeChild(item.firstChild!);
          }
          item.classList.remove('full');
        }
        const speedInfo: HTMLParagraphElement = document.createElement('p');
        speedInfo.innerHTML = `<strong>ALERT</strong><br>Current speed: <strong>${rocket.power}</strong>`;
        item.append(speedInfo);
        item.classList.add('full');
      }
      if (item.id === 'speedURSS') {
        if (item.classList.contains('full')) {
          while (item.hasChildNodes()) {  
            item.removeChild(item.firstChild!);
          }
          item.classList.remove('full');
        }
        const speedInfo: HTMLParagraphElement = document.createElement('p');
        speedInfo.innerHTML = `<strong>ALERT</strong><br>Current speed: <strong>${rocket.power}</strong>`;
        item.append(speedInfo);
        item.classList.add('full');
      }
    })
  }
}

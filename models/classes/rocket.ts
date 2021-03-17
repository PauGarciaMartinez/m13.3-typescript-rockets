export class Rocket {
  id: string;
  propellant: number[];
    constructor(id: string, propellant: number[]) {
      this.id = id;
      this.propellant = propellant;
    }

    calcTotalPower(){}

    speedUp() {}

    speedDown() {}
}
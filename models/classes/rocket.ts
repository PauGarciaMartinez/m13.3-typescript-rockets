export class Rocket {
  id: string;
  boosters: number[];
  power: number = 0;
  totalPower: number = 0;
  increments: number = 0;
  decrements: number = 0;
    constructor(id: string, boosters: number[]) {
      this.id = id;
      this.boosters = boosters;
    }

    calcTotalPower(): void {
      this.totalPower = this.boosters.reduce((a, b) => a + b);
    }

    speedUp(): number {
      this.calcTotalPower();

      if (this.power < this.totalPower) {
        if (this.increments === 0) {
          this.power += 30;
          this.increments += 1;
        } else if (this.increments === 1) {
          this.power += 20;
          this.increments += 1;
        } else if (this.increments === 2) {
          this.power += 20;
          this.increments += 1;
        } else if (this.increments >= 3) {
          this.power += 10;
          this.increments += 1;
        }
      }
      return this.power;
    }

    slowDown(): number {
      if (this.power > 0) {
        if (this.increments > 3) {
          this.power -= 10;
          this.increments -= 1;
        } else if (this.increments === 3) {
          this.power -= 20;
          this.increments -= 1;
        } else if (this.increments === 2) {
          this.power -= 20;
          this.increments -= 1;
        } else if (this.increments === 1) {
          this.power -= 30;
          this.increments -= 1;
        }
      }
      return this.power;
    }
}
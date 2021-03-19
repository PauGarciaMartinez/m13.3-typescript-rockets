var Rocket = /** @class */ (function () {
    function Rocket(id, boosters) {
        this.power = 0;
        this.totalPower = 0;
        this.increments = 0;
        this.decrements = 0;
        this.id = id;
        this.boosters = boosters;
    }
    Rocket.prototype.calcTotalPower = function () {
        this.totalPower = this.boosters.reduce(function (a, b) { return a + b; });
    };
    Rocket.prototype.speedUp = function () {
        this.calcTotalPower();
        if (this.power < this.totalPower) {
            if (this.increments === 0) {
                this.power += 30;
                this.increments = 1;
            }
            else if (this.increments === 1) {
                this.power += 20;
                this.increments = 2;
            }
            else if (this.increments === 2) {
                this.power += 20;
                this.increments = 3;
            }
            else if (this.increments === 3) {
                this.power += 10;
            }
        }
        return this.power;
    };
    Rocket.prototype.slowDown = function () {
        if (this.power > 0) {
            if (this.increments >= 3) {
                this.power -= 10;
                this.increments -= 1;
            }
            else if (this.increments === 2) {
                this.power -= 20;
                this.increments -= 1;
            }
            else if (this.increments === 1) {
                this.power -= 30;
                this.increments -= 1;
            }
        }
        return this.power;
    };
    return Rocket;
}());
export { Rocket };

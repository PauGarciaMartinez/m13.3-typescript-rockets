var Rocket = /** @class */ (function () {
    function Rocket(id, propellant) {
        this.id = id;
        this.propellant = propellant;
    }
    Rocket.prototype.calcTotalPower = function () {
        var totalPower = this.propellant.reduce(function (a, b) { return a + b; });
        return totalPower;
    };
    Rocket.prototype.speedUp = function () { };
    Rocket.prototype.speedDown = function () { };
    return Rocket;
}());
export { Rocket };

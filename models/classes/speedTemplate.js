var speedTemplate = /** @class */ (function () {
    function speedTemplate(container) {
        this.container = container;
    }
    speedTemplate.prototype.render = function (rocket) {
        this.container.innerHTML = '';
        this.container.innerHTML = "<p><strong>ALERT</strong><br>Current speed: <strong>" + rocket.power + "</strong></p>";
        if (rocket.power === rocket.totalPower) {
            var maxSpeed = document.createElement('p');
            maxSpeed.classList.add('alert-max');
            maxSpeed.innerHTML = "<strong>MAX SPEED</strong>";
            this.container.append(maxSpeed);
        }
    };
    speedTemplate.prototype.erase = function () {
        this.container.innerHTML = '';
    };
    return speedTemplate;
}());
export { speedTemplate };

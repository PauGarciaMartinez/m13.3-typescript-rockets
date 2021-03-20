var speedTemplate = /** @class */ (function () {
    function speedTemplate(container) {
        this.container = container;
    }
    speedTemplate.prototype.render = function (rocket) {
        if (this.container.classList.contains('full')) {
            while (this.container.hasChildNodes()) {
                this.container.removeChild(this.container.firstChild);
            }
            this.container.classList.remove('full');
        }
        var speedInfo = document.createElement('p');
        speedInfo.innerHTML = "<strong>ALERT</strong><br>Current speed: <strong>" + rocket.power + "</strong>";
        this.container.append(speedInfo);
        if (rocket.power === rocket.totalPower) {
            var maxSpeed = document.createElement('p');
            maxSpeed.innerHTML = "<strong>MAX SPEED</strong>";
            this.container.append(maxSpeed);
        }
        this.container.classList.add('full');
    };
    speedTemplate.prototype.erase = function () {
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.firstChild);
        }
    };
    return speedTemplate;
}());
export { speedTemplate };

var infoTemplate = /** @class */ (function () {
    function infoTemplate(container) {
        this.container = container;
    }
    infoTemplate.prototype.render = function (rocket) {
        if (this.container.classList.contains('full')) {
            while (this.container.hasChildNodes()) {
                this.container.removeChild(this.container.firstChild);
            }
            this.container.classList.remove('full');
        }
        var rocketInfo = document.createElement('p');
        rocketInfo.innerHTML = "Rocket <strong>" + rocket.id + "</strong> boosters max speed: <strong>" + rocket.boosters.toString() + "</strong>";
        this.container.append(rocketInfo);
        this.container.classList.add('full');
    };
    infoTemplate.prototype.renderBoth = function (rocket) {
        var _this = this;
        if (this.container.classList.contains('full')) {
            while (this.container.hasChildNodes()) {
                this.container.removeChild(this.container.firstChild);
            }
            this.container.classList.remove('full');
        }
        rocket.forEach(function (rocket) {
            var rocketInfo = document.createElement('p');
            rocketInfo.innerHTML = "Rocket <strong>" + rocket.id + "</strong> boosters max speed: <strong>" + rocket.boosters.toString() + "</strong>";
            _this.container.append(rocketInfo);
        });
        this.container.classList.add('full');
    };
    return infoTemplate;
}());
export { infoTemplate };

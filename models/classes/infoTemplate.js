var infoTemplate = /** @class */ (function () {
    function infoTemplate(container) {
        this.container = container;
    }
    infoTemplate.prototype.render = function (rocket) {
        this.container.innerHTML = '';
        this.container.innerHTML = "<p>Rocket <strong>" + rocket.id + "</strong> boosters max speed: <strong>" + rocket.boosters.toString() + "</strong></p>";
    };
    infoTemplate.prototype.renderBoth = function (rocket) {
        var _this = this;
        this.container.innerHTML = '';
        rocket.forEach(function (rocket) {
            var rocketInfo = document.createElement('p');
            rocketInfo.innerHTML = "Rocket <strong>" + rocket.id + "</strong> boosters max speed: <strong>" + rocket.boosters.toString() + "</strong>";
            _this.container.append(rocketInfo);
        });
    };
    return infoTemplate;
}());
export { infoTemplate };

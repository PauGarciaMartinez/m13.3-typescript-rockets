var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (rocket) {
        var rocketInfo = document.createElement('p');
        rocketInfo.innerText = "Rocket " + rocket.id + " boosters max speed: " + rocket.propellant.toString();
        this.container.append(rocketInfo);
    };
    return ListTemplate;
}());
export { ListTemplate };

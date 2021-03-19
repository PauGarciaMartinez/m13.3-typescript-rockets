var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (rocket) {
        var rocketInfo = document.createElement('p');
        rocketInfo.innerHTML = "Rocket <strong>" + rocket.id + "</strong> boosters max speed: <strong>" + rocket.boosters.toString() + "</strong>";
        this.container.append(rocketInfo);
    };
    return ListTemplate;
}());
export { ListTemplate };

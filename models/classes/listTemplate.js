var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (rocket) {
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
    return ListTemplate;
}());
export { ListTemplate };

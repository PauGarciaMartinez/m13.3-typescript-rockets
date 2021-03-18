var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (rocket) {
        var li = document.createElement('li');
        li.innerText = 'Output:';
        var rocketInfo = document.createElement('p');
        rocketInfo.innerText = rocket.id + ": " + rocket.propellant.toString();
        li.append(rocketInfo);
        this.container.append(li);
    };
    return ListTemplate;
}());
export { ListTemplate };

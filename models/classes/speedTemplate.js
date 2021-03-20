var speedTemplate = /** @class */ (function () {
    function speedTemplate(container) {
        this.container = container;
    }
    speedTemplate.prototype.render = function (rocket) {
        this.container.forEach(function (item) {
            if (item.id === 'speedUSA') {
                if (item.classList.contains('full')) {
                    while (item.hasChildNodes()) {
                        item.removeChild(item.firstChild);
                    }
                    item.classList.remove('full');
                }
                var speedInfo = document.createElement('p');
                speedInfo.innerHTML = "<strong>ALERT</strong><br>Current speed: <strong>" + rocket.power + "</strong>";
                item.append(speedInfo);
                item.classList.add('full');
            }
            if (item.id === 'speedURSS') {
                if (item.classList.contains('full')) {
                    while (item.hasChildNodes()) {
                        item.removeChild(item.firstChild);
                    }
                    item.classList.remove('full');
                }
                var speedInfo = document.createElement('p');
                speedInfo.innerHTML = "<strong>ALERT</strong><br>Current speed: <strong>" + rocket.power + "</strong>";
                item.append(speedInfo);
                item.classList.add('full');
            }
        });
    };
    return speedTemplate;
}());
export { speedTemplate };

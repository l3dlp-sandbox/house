if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function () {
        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}

app.controller = app.controller || {
        onDOMContentLoaded: function () {
            let hook = document.getElementById("fiddleHook"),
                container = document.createElement("div");

            this.configConsole();

            container.setAttribute('style', "width: 98%; height: 98%; overflow:hidden; position:absolute; background-color:#000000; cursor: hand;");
            hook.appendChild(container);
            let view = new app.view.Viewport({
                hook: hook
            });
            view.init({container: container});
            view.render();
            view.run();
        },
        configConsole: function () {
            console.log("%c" + metadata.consoleTag, 'font-style: italic; font-size: 20px;');
            console.log("%c" + metadata.urls.github, "color: blue; font-style: italic; text-decoration: underline; background-color: #FFFF00;");
            console.group();
        }
    };


app.test = window.location.pathname.match('test') ? app.test || {
    publisher: function () {
        return new app.toolkit.three.Publisher();
    },
    r: function (config) {
        return new app.toolkit.three.R(config);
    },
    toolkit: function () {
        return app.toolkit;
    },
    metadata: function () {
        return metadata
    },
    object: function (config) {
        return new app.toolkit.three.Object(config);
    },
    viewport: function (config) {
        return new app.view.Viewport(config);
    }
} : null;

if (!window.location.pathname.match('test')) {
    document.body.addEventListener('DOMContentLoaded', app.controller.onDOMContentLoaded(), false);
}



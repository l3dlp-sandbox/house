

/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

if ( !window.requestAnimationFrame ) {

    window.requestAnimationFrame = ( function() {

        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

                window.setTimeout( callback, 1000 / 60 );

            };

    } )();

}


app.controller = app.controller || {
        onDOMContentLoaded: function () {
            let hook = document.getElementById("fiddleHook"),
                container = document.createElement("div");
            container.setAttribute('style', "width: 98%; height: 98%; overflow:hidden; position:absolute; background-color:#000000; cursor: hand;");
            container.setAttribute('id', 'container');
            container.addEventListener('click', this.onContainerClick);
            hook.appendChild(container);
            let view = new app.view.Viewport({});
            view.init({ container: container });
            view.render();
            view.run();
        },
        onContainerClick: function() {
            var link = document.createElement('a');
            link.setAttribute('href', metadata.urls.github);
            link.setAttribute('target', '_blank');
            link.click();
        }
    };


app.test = window.location.pathname.match('test') ? app.test || {
    publisher: function () {
        return new app.toolkit.three.Publisher();
    },
    r: function(config) {
        return new app.toolkit.three.R(config);
    },
    object: function(config) {
        return new app.toolkit.three.Object(config);
    },
    viewport: function(config) {
        return new app.view.Viewport(config);
    }



} : null;

if (!window.location.pathname.match('test')) {
    document.body.addEventListener('DOMContentLoaded', app.controller.onDOMContentLoaded(), false);
}



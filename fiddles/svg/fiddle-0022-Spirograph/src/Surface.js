/**
 * Class used to virtualize model a Scalar Vector
 * Graphics (SVG) html tag.
 */

class Surface {

    /**
     * Static config method. Object returned defines the default properties of the class. This
     * also defines the properties that may be passed to the class constructor.
     *
     * @returns {{width: string, height: string, xmlns: string, xmlnsEv: string, xmlnsXlink: string, zoomAndPan: string, preserveAspectRatio: string, hook: HTMLElement, autoBind: boolean}}
     */
    config() {
        return {
            id: 'surface1',
            cssWidth: '500px',
            cssHeight: '500px',
            xmlns: Util.xmlNamespaces().xmlns,
            xmlnsEv: Util.xmlNamespaces().xmlnsEv,
            xmlnsXlink: Util.xmlNamespaces().xmlnsXLink,
            zoomAndPan: "disabled",
            coorWidth: '500px',
            coorHeight: '500px',
            hook: window.document.body,
            autoBind: false,
            autoPopulate: false,
            onLoad: 'app.controller.onSurfaceLoad(evt);'

        }
    }

    /**
     * Class constructor.
     *
     * @param config
     */
    constructor(config) {

        this._id = config && config.hasOwnProperty('id') ? config.id : this.config().id;
        this._cssWidth = config && config.hasOwnProperty('cssWidth') ? config.width : this.config().cssWidth;
        this._cssHeight = config && config.hasOwnProperty('cssHeight') ? config.height : this.config().cssHeight;
        this._xmlns = config && config.hasOwnProperty('xmlns') ? config.xmlns : this.config().xmlns;
        this._xmlnsXlink = config && config.hasOwnProperty('xmlnsXlink') ? config.xmlnsXlink : this.config().xmlnsXlink;
        this._xmlnsEv = config && config.hasOwnProperty('xmlnsEv') ? config.xmlnsEv : this.config().xmlnsEv;
        this._hook = config && config.hasOwnProperty('hook') ? config.hook : this.config().hook;
        this._autoBind = config && config.hasOwnProperty('autoBind') ? config.autoBind : this.config().autoBind;
        this._zoomAndPan = config && config.hasOwnProperty('zoomAndPan') ? config.zoomAndPan : this.config().zoomAndPan;
        this._coorWidth = config && config.hasOwnProperty('coorWidth') ? config.coorWidth : this.config().coorWidth;
        this._coorHeight = config && config.hasOwnProperty('coorHeight') ? config.coorHeight : this.config().coorHeight;
        this._onLoad = config && config.hasOwnProperty('onLoad') ? config.onLoad : this.config().onLoad;
        this._autoPopulate = config && config.hasOwnProperty('autoPopulate') ? config.autoPopulate : this.config().autoPopulate;
        this._shapes = [];
        this.init();
    }

    /**
     * Horizontal length in the svg coordinate system.
     *
     * See `MDN > Web technology for developers > SVG > SVG Attribute reference > `
     * [width](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width).
     *
     * @returns {string}
     */
    get coorWidth() {
        return this._coorWidth;
    }

    /**
     * Vertical length in the user coordinate system.
     *
     * See `MDN > Web technology for developers > SVG > SVG Attribute reference > `
     * [height](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height).
     *
     * @returns {string|*}
     */
    get coorHeight() {
        return this._coorHeight;
    }

    /**
     * Width specified in pixels ("px") of the svg doc element. The value
     * is assigned to the tag via the style tag.
     *
     * @returns {string}
     */
    get cssWidth() {
        return this._cssWidth;
    }

    /**
     * Height specified in pixels ("px") of the svg doc element. The value
     * is assigned to the tag via the style tag.
     *
     * @returns {string}
     */
    get cssHeight() {
        return this._cssHeight;
    }

    /**
     * The namespace uri attribute of the svg doc element.
     *
     * See [http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI].
     *
     * @returns {string}
     */
    get xmlns() {
        return this._xmlns;
    }

    get xmlnsXlink() {
        return this._xmlnsXlink;
    }

    get xmlnsEv() {
        return this._xmlnsEv;
    }

    get docElement() {
        return this._docElement;
    }

    get hook() {
        return this._hook;
    }

    get autoBind() {
        return this._autoBind;
    }

    get autoPopulate() {
        return this._autoPopulate;
    }

    get zoomAndPan() {
        return this._zoomAndPan;
    }

    get onLoad() {
        return this._onLoad;
    }

    get group() {
        return this._group;
    }

    get shapes() {
        return this._shapes;
    }

    /**
     * Method used to append the docElement to configured hook element.
     */
    bind() {
        this.hook.appendChild(this.docElement);
    }

    /**
     * Method invoked during initialization (init)
     * when the autoBind flag is true.  It creates
     * new Group instance and assigns it to the
     * group property.  The docElementNS of the
     * resulting class is then appended to the
     * docElement.
     */
    initGroup() {
        var group = new Group({
            id: 'shapesGroup',
            hook: this.docElement,
            autoBind: this.autoBind
        });
        this._group = group;
    }

    /**
     * Method invoked during initialization (init)
     * when the autoPopulate flag is true. It will
     * add a star to the main "g" (group) tag.
     *
     * Note - This method is really meant for testing.
     */
    initShapes() {
        var star = new Star({id: 'star-1'});
        this.group.docElementNS.appendChild(star.docElementNS);
        this.shapes.push(star);
    }

    /**
     * Method called by the constructor to create and assign docElement based
     * on the properties exposed by the class.
     *
     * Note - if the autoBind flag is true, then it ends by invoking bind method.
     */
    init() {
        var me = this,
            svg = document.createElementNS(this.xmlns, 'svg');

        svg.setAttribute('id', 'surface1');
        svg.setAttribute('width', this.coorWidth);
        svg.setAttribute('height', this.coorHeight);
        svg.setAttribute('xmlns:xlink', this.xmlnsXlink);
        svg.setAttribute('xmlns:ev', this.xmlnsEv);
        svg.setAttribute('zoomAndPan', this.zoomAndPan);
        svg.setAttribute('style', 'width: ' + this.cssWidth + '; height: ' + this.cssHeight + ';');
        svg.setAttribute('onload', this.onLoad);

        me._docElement = svg;

        if (me.autoBind) {
            me.initGroup();
            if (me.autoPopulate) {
                me.initShapes();
            }
            me.bind();
        }
    }


}
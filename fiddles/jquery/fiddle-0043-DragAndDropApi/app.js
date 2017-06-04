(function (app, $, undefined) {
  "use strict";

  app.metadata = {
    fiddleHeader: 'HTML Drag And Drop API',
    urls: {
      github: 'https://github.com/bradyhouse/house/tree/master/fiddles/jquery/fiddle-0043-DragAndDropApi'
    },
    consoleTag: 'H O U S E ~ f i d d l e s'
  };

  app.allowDrop = true;

  app.generateGuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  app.onDragStart = function (event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.dataTransfer.dropEffect = 'none';
    app.allowDrop = true;
  };

  app.onDragOver = function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move'
  };

  app.onAntiDrop = function (event) {
    app.allowDrop = false;
    event.preventDefault();
    event.dataTransfer.clearData();
    return false;
  };

  app.onAntiDragOver = function (event) {
    app.allowDrop = false;
    event.preventDefault();
    event.dataTransfer.clearData();
    event.returnValue = null;
    return false;
  };

  app.onDrop = function (event) {
    if (app.allowDrop) {
      event.preventDefault();
      let data = event.dataTransfer.getData('text');
      event.target.appendChild(document.getElementById(data));
      app.view.createDraggableLink(app.hook);
    }
  };

  app.view = app.view || {
      createDraggableLink: function (hookEl) {
        let el = window.document.createElement('div');
        el.setAttribute('id', app.generateGuid());
        el.setAttribute('draggable', 'true');
        el.setAttribute('ondragstart', 'app.onDragStart(event)');
        el.setAttribute('style', 'background-color: black; color: white; width: 100%;');
        el.innerHTML = 'drag to drop - ' + el.id + '<br/>';
        hookEl.appendChild(el);
      },
      createAntiDropZone: function (hookEl) {
        let elEmpty = window.document.createElement('div'),
          el = window.document.createElement('div');
        el.setAttribute('ondrop', 'app.onAntiDrop(event)');
        el.setAttribute('ondragover', 'app.onAntiDragOver(event)');
        el.setAttribute('class', 'anti-drop-zone infinite-slide-left');
        el.innerHTML = 'anti-drop<br/>';
        hookEl.appendChild(el);
        hookEl.appendChild(elEmpty);
      },
      createDropZone: function (hookEl) {
        let elTitle = window.document.createElement('div'),
          el = window.document.createElement('div');
        el.setAttribute('ondrop', 'app.onDrop(event)');
        el.setAttribute('ondragover', 'app.onDragOver(event)');
        el.setAttribute('class', 'drop-zone');
        el.innerHTML = 'drop<br/>';
        hookEl.appendChild(el);
        hookEl.appendChild(elTitle);

      },
      init: function () {
        let hook = document.getElementById('fiddleHook');
        app.hook = hook;
        app.view.createDropZone(hook);
        app.view.createDraggableLink(hook);
        app.view.createAntiDropZone(hook);
      }
    };

  app.configConsole = function() {
    console.log("%c" + app.metadata.consoleTag, 'font-style: italic; font-size: 20px;');
    console.log("%c" + app.metadata.urls.github, "color: blue; font-style: italic; text-decoration: underline; background-color: #FFFF00;");
    console.group();
  }

  $(document).ready(function () {
    app.configConsole();
    app.view.init();
  });

})(window.app = window.app || {}, jQuery)

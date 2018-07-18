import { isUndef, existsInDOM, getComponentName } from '../shared/utils';
import { loadHTML, isValidRenderMethod, COMBI_DOMPROPS } from './utils';
import $ from 'jquery';

class CombiDOM {
  constructor() {
    this.elements = {};
    this.updateQueue = [];
    this.combiApp = null;
  }

  equeueForUpdate(component) {
    const name = getComponentName(component);

    //Component has not been rendered yet
    if (!isMounted(name)) {
      return this._render(component, name);
    }

    //Push the component in the update Queue
    this.updateQueue.push(this.elements[name]);
  }

  render(app, root) {

    // Check for valid root
    if (!isUndef(root)) {
      if (!$(`#${root}`).length) {
        throw new Error('App root does not exist in DOM.');
      }
    } else {
      throw new Error('Please provide a root element.');
    }

    // Check for valid app 
    if (!isUndef(app)) {
      if (!(app.getComponents)) {
        throw new Error('Can only render a valid Combi App instance.');
      }

      this.combiApp = app;
    } else {
      throw new Error('Undefinded app argument given. Please initalize the app upfront.');
    }

    this.componentRoot = $(`#${root}`);

    const components = app.getComponents();

    for(let component of components) {
      if(component.root) {
        this._render(component.type)
        break;
      };
    };
  }
}

CombiDOM.prototype._render = async function(component, name) {
  const instance = new component();
  const context = instance.render();

  //Render method of the component does not conform to required style.
  if (!isValidRenderMethod(context)) {
    throw new Error(`Failed to render component. Expected valid method and html to render, received ${typeof context}`);
  }

  let fetchedHtml = null;
  let element = null;
  let bindings = null;

  // Fetch html data from server if component provides a htmlPath in its render method
  if (context.htmlPath) {
    fetchedHtml = await this._getHTML(context.htmlPath);
  }

  element = this._renderHTML(fetchedHtml || context.html);
  this.elements[getComponentName(component)] = instance;

  //Upgrade the rendered elements for mdl
  componentHandler.upgradeElements(this.componentRoot.children());

  if (instance.componentDidRender) {
    instance.componentDidRender();
  }
};

CombiDOM.prototype._isMounted = function(name) {
  if (this.elements.indexOf(name) === -1) {
    return false;
  }

  const comp = this.elements[name];

  if (isUndef(comp.$cb) || !existsInDOM(component.$cb)) {
    return false;
  }

  return true;
};

CombiDOM.prototype._getHTML = async function(path) {
  return await loadHTML(path);
};

CombiDOM.prototype._renderHTML = function(html) {
  this.componentRoot.append(html);
  return $(html);
};

CombiDOM.prototype._mapProps = function(name, element) {
  let bindings = {};

  for (let ON of COMBI_ON) {
    let key = Object.keys(ON);
    const nodes = element.find(`[${key}]`);

    if (isUndef(nodes)) {
      continue;
    }

    nodes.each((index, node) => {
      $(node).on(COMBI_ON[key], this.elements[name][$(node).attr(COMBI_ON[key])]);
    });
  }

  return bindings;
};

CombiDOM.prototype._createCombiObject = function(instance, name, ref, bindings) {
  let combiObject = {
    name: name,
    inst: instance,
    ref: ref,
    bindings: bindings
  };

  return combiObject;
};

export default CombiDOM;

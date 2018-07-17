import { isUndef, existsInDOM, getComponentName } from '../shared/utils';
import { loadHTML, isValidRenderMethod, COMBI_ON , COMBI_DOMPROPS } from './utils';
import $ from 'jquery';

class CombiDOM {
  constructor(root) {
    if (!$(`#${root}`).length) {
      throw new Error('App root does not exist in DOM.');
    }

    this.componentRoot = $(`#${root}`);
    this.elements = {};
  }

  equeueForUpdate(component) {
    const name = getComponentName(component);

    //Component has not been rendered yet
    if (!isMounted(name)) {
      return this.render(component, name);
    }
  }

  componentTransition({ from, to }) {}
}

CombiDOM.prototype.render = async function(component, name) {
  const instance = new component();
  const context = instance.render();

  //Render method of the component does not conform to required style.
  if (!isValidRenderMethod(context)) {
    throw new Error(`Failed to render component. Expected valid method and html to render, received ${typeof context}`);
  }

  let fetchedHtml = null;
  let element = null;
  let bindings = null;

  if (context.htmlPath) {
    fetchedHtml = await this.getHTML(context.htmlPath);
  }

  element = this.renderHTML(fetchedHtml || context.html);
  this.elements[getComponentName(component)] = instance;
  bindings = this.mapProps(name, element);

  instance.ref = element;

  if (instance.componentDidRender) {
    componentHandler.upgradeElements(this.componentRoot.children());

    instance.componentDidRender();
  }
};

CombiDOM.prototype.isMounted = function(name) {
  if (isUndef(this.elements[name])) {
    return false;
  }

  const comp = this.elements[name];

  if (isUndef(comp.$cb) || !existsInDOM(component.$cb)) {
    return false;
  }

  return true;
};

CombiDOM.prototype.getHTML = async function(path) {
  return await loadHTML(path);
};

CombiDOM.prototype.renderHTML = function(html) {
  this.componentRoot.append(html);
  return $(html);
};

CombiDOM.prototype.mapProps = function(name, element) {
  let bindings = {};

  for (let ON of COMBI_ON) {
    let key = Object.keys(ON);
    const nodes = element.find(`[${key}]`);

    if (isUndef(nodes)) { continue }

    nodes.each( (index,node) => {
      $(node).on(COMBI_ON[key],this.elements[name][$(node).attr(COMBI_ON[key])])
    });

    };

  return bindings;
};

CombiDOM.prototype.createCombiObject = function(instance, name, ref, bindings) {
  let combiObject = {
    name: name,
    inst: instance,
    ref: ref,
    bindings: bindings
  };

  return combiObject;
};

export default CombiDOM;

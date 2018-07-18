import { isUndef } from '../shared/utils';
import createState from '../shared/state';

export default function CombiApp({ navigation }, component) {
  let components = [];
  let navigationComponent = null;
  let state = createState();

  if(!isUndef(navigation)) {
    navigationComponent = navigation
  };

  addComponent(component);

  function addComponent(component) {
    if (isUndef(component)) {
      return;
    }

    if (Array.isArray(component)) {
      for (let comp of component) {
        addComponent(comp);
      }
      return;
    }

    const { type } = component;

    if (isUndef(type) || !type.prototype.render) {
      throw new Error('Unexpected component argument given.');
    }

    components.push(component);
  }

  function addNavigation(navigation) {}

  function getComponents() {
    return components;
  }

  function getNavigation() {
    return navigationComponent;
  }

  return {
    addComponent,
    getComponents,
    getNavigation
  };
}

CombiApp.prototype.$app = 'COMBI_APP';

import { isUndef } from '../shared/utils';

export default function CombiApp(component) {
  let components = [];
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

  function getComponents() {
    return components;
  }

  return {
    addComponent,
    getComponents
  };
}

CombiApp.prototype.$app = 'COMBI_APP';

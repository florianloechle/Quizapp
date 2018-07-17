import { isUndef, getComponentName } from '../shared/utils';
import CombiDOM from './CombiDOM';

export default function CombiApp({ root }) {
  if (isUndef(root) || typeof root !== 'string') {
    throw new Error(`Expected string as root element. But ${typeof root} given.`);
  }

  let dom = null;
  let components = {};

  function addComponent({ comp }) {
    if(!comp.prototype.render) {
      throw new Error('Components must provide a render method.')
    };

    components[getComponentName(comp)] = comp;
  }

  function navigate(component) {
    CombiDOM.render(component);
  }

  function run() {

    dom = new CombiDOM(root);
    dom.render(components['HomeDashBoard']);
  }

  return {
    run: run,
    addComponent: addComponent
  };
}

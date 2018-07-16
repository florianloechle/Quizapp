import { isUndef } from '../shared/utils';
import Router from '../Combi/CombiRouter';
import { CombiRenderer } from '../Combi/CombiRenderer';

export function App({ root }) {

  if (isUndef(root) || typeof root !== 'string') {
    throw new Error(`Expected string as root element. But ${typeof root} given.`);
  }

  function createCombiElement(component) {}

  function addComponent({ component, route }) {
    Router.newRoute(route,component);
    
  }

  function routeTransition({ context: { from, to } }) {}

  function navigate(route) {
    Router.navigate(route);
  }

  function run() {
    Router.listen();
  }

  return {
    addComponent: addComponent
  };
}

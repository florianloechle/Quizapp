import {isNormalObject} from '../shared/utils';

export const CombiRenderer = () => {

  let components = [];
  
  function enqueueForUpdate(component) {
    for(let component of components) {
      
    }


  }

  function render(component) {
    const context = component().render();

    if(!isNormalObject(context)) {
      throw new Error(`Failed to render component. Expected plain object, received ${typeof context}`)
    };


  }

}





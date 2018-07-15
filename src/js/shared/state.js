import { isNormalObject } from '../shared/utils';

function createState(preloadedState) {
  let currentState = {};
  let isUpdating = false;

  if (preloadedState && isNormalObject(preloadedState)) {
    updateState(preloadedState);
  }

  function updateState(partialState) {
    if (!isNormalObject(partialState)) {
      throw new Error('Expcted parameter to be an object');
    }

    if (!isUpdating) {
      isUpdating = true;

      let newState = Object.assign({}, currentState, partialState);
      currentState = newState;

      isUpdating = false;
    } else {
      throw new Error('You can not update the state while another update is in process');
    }
  }

  function getState() {
    return Object.assign({}, currentState);
  }

  return {
    update: updateState,
    getState: getState
  };
}

export default createState;

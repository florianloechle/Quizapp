const createState = require('../src/js/shared/state');

describe('createState', () => {

  it('exposes a valid api', () => {

    const state = createState();
    const stateAPI = Object.keys(state);

    expect(stateAPI.length).toBe(2);
    expect(stateAPI).toContain('getState');
    expect(stateAPI).toContain('updateState');

  })


  it('correctly sets a preloaded state', () => {

    const state = createState({
      a: 1,
      b: 2
    })

    const currentState = state.getState();
    expect(currentState).toMatchObject({a: 1, b: 2});

  })


})
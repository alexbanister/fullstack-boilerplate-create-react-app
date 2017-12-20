import * as reducers from './reducers';

describe('preferences Reducers', () => {
  it.skip('preferences should set default state', () => {
    const expectation = {};

    expect(reducers.preferences(undefined, {})).toEqual(expectation);
  });
});

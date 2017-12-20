import * as actions from './actions';

describe('Preferences action', () => {
  it.skip('SAVE_PREFERENCES should take object return an action', () => {
    const preferences = {
      minLayover: 1
    };
    const expected = {
      type: 'SAVE_PREFERENCES',
      preferences: { minLayover: 1 }
    };

    expect(actions.savePreferences(preferences)).toEqual(expected);
  });
});

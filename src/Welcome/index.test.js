import { shallow } from 'enzyme';
import Welcome from './index';
import React from 'react';


describe('Welcome', () => {
  it('should always match the snapshot', () => {
    const wrapper = shallow(<Welcome />);

    expect(wrapper).toMatchSnapshot();
  });
});

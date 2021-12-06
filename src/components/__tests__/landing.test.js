import React from 'react';
import Landing from '../../components/landing';

let wrapper;
const { shallow, mount } = enzyme;

describe('landing', () => {
  describe('<Landing />', () => {
    beforeEach(() => {
      wrapper = shallow(<Landing />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('has a search input', () => {
      expect(wrapper.find('LocationSearch').exists()).toBe(true);
    });

    it('renders a forecast list after search', () => {
      const setState = jest.fn(() => true);
      const useStateSpy = jest.spyOn(React, 'useState');
      useStateSpy.mockImplementation(init => [init, setState]);

      const component = mount(<Landing />);

      expect(component.find('Forecast').exists()).toBe(false);
      component.find('button').simulate('click');
      expect(component.find('Forecast').exists()).toBe(true);
    });
  });
});

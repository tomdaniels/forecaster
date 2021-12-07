import React from 'react';
import { act } from 'react-dom/test-utils';
import locationApi from '../../api';
import Landing from '../../components/landing';

let wrapper;
const { shallow, mount } = enzyme;

describe('landing', () => {
  describe('<Landing />', () => {
    beforeEach(() => {
      wrapper = shallow(<Landing />);
    });

    afterEach(() => {
      jest.clearAllMocks();
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

    it('renders a try again prompt if the api fails', async () => {
      const promise = Promise.resolve(undefined);
      const locationApiSpy = jest.spyOn(locationApi, 'get');
      locationApiSpy.mockResolvedValue(promise);

      const component = mount(<Landing />);
      component.find('input').simulate('change', { target: { value: 'invalid' } });
      component.find('button').simulate('click');

      expect(locationApiSpy).toHaveBeenCalled();
      setTimeout(() => {
        expect(component.find('Forecast').exists()).toBe(false);
        expect(component.find('pre').text()).toEqual('Hm.. something went wrong fetching the request, try again?');
      }, 0);
      await act(() => promise);
    });
  });
});

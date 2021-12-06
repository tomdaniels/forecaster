import LocationSearch from '../index';

const { shallow } = enzyme;

describe('location-search.js', () => {
  describe('<LocationSearch />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<LocationSearch />);
    });
    it('exposes an input form & submit button', () => {
      expect(wrapper.find('input').exists()).toBe(true);
      expect(wrapper.find('button').exists()).toBe(true);
    });

    it('allows the parent to control the input change functionality', () => {
      const handleChangeSpy = jest.fn();

      wrapper = shallow(<LocationSearch handleChange={handleChangeSpy} />);
      const input = wrapper.find('input');

      input.simulate('change', {});
      expect(handleChangeSpy).toHaveBeenCalled();
    });

    it('allows the parent to control the onSubmit functionality', () => {
      const onSubmitSpy = jest.fn();
      wrapper = shallow(<LocationSearch onSubmit={onSubmitSpy} />);

      wrapper.find('button').simulate('click');
      expect(onSubmitSpy).toHaveBeenCalled();
    });
  });
});

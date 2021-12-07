import Loader from '../loader';

describe('loader.js', () => {
  describe('<Loader />', () => {
    it('satirocally mocks my lack of design skillz', () => {
      const wrapper = enzyme.shallow(<Loader />);
      expect(wrapper.find('small').text()).toEqual('company designed spinner goes here');
    });
  });
});

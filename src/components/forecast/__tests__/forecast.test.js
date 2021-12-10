import Forecast from '..';

const { shallow } = enzyme;

describe('index.js', () => {
  const dummyData = {
    location: {
      name: 'cronulla',
    },
    currentConditions: {
      text: 'sunny baby',
      icon: 'file-stub',
    },
  };
  describe('<Forecast />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Forecast forecastData={dummyData} />);
    });

    it('displays a loader while waiting for data', () => {
      wrapper = shallow(<Forecast forecastData={{}} />);
      expect(wrapper.find('Loader').exists()).toBe(true);
    });

    it('renders current location above the conditions', () => {
      expect(wrapper.find('h2').text()).toContain(dummyData.location.name);
    });

    it('renders an icon for the current conditions', () => {
      expect(wrapper.find('img').props().alt).toContain(dummyData.location.name);
    });

    it('renders the forecast summary component for the future days ahead', () => {
      const forecastProps = {
        ...dummyData,

        forecast: [
          {
            date: '2021-01-01',
            day: {
              mintemp_c: 17,
              maxtemp_c: 22,
              condition: {
                text: 'fair',
                icon: 'beautiful-img',
              },
            },
          },
          {
            date: '2021-01-02',
            day: {
              mintemp_c: 28,
              maxtemp_c: 36,
              condition: {
                text: 'its hot mate',
                icon: 'more-imagery',
              },
            },
          },
          {
            date: '2021-01-03',
            day: {
              mintemp_c: 0,
              maxtemp_c: 1,
              condition: {
                text: 'it snows in aus now',
                icon: 'img-url',
              },
            },
          },
        ],

      };

      wrapper = shallow(<Forecast forecastData={forecastProps} />);

      expect(wrapper.find('ForecastSummary').exists()).toBe(true);
      expect(wrapper.find('ForecastSummary')
        .dive()
        .find('h4')).toHaveLength(forecastProps.forecast.length);
    });
  });
});

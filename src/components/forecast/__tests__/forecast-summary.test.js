import ForecastSummary from '../forecast-summary';

const forecastData = [
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
];

describe('forecast-summary.js', () => {
  describe('<ForecastSummary />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = enzyme.shallow(<ForecastSummary forecast={forecastData} />);
    });

    it('renders all given props in the markup', () => {
      forecastData.forEach((_, idx) => {
        expect(wrapper.find('h4').at(idx).text()).toEqual(forecastData[idx].date);
        expect(wrapper.find('p').at(idx).text()).toEqual(forecastData[idx].day.condition.text);
        expect(wrapper.find('img').at(idx).props().alt).toEqual(forecastData[idx].day.condition.icon);

        expect(wrapper.find('.forecaster__forecast-summary-header')
          .at(idx)
          .text()).toContain(forecastData[idx].day.mintemp_c.toString());
        expect(wrapper.find('.forecaster__forecast-summary-header')
          .at(idx)
          .text()).toContain(forecastData[idx].day.maxtemp_c.toString());
      });
    });
  });
});

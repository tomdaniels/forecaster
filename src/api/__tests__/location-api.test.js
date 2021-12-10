import locationApi from '..';
import * as fetch from '../fetch';

describe('location-api.js', () => {
  it('exposes network requests as functions', () => {
    expect(locationApi).toHaveProperty('get');
  });

  it('simplifies the request shape', async () => {
    const fetchSpy = jest.spyOn(fetch, 'default');
    const dummyResponse = {
      location: {
        name: 'Cronulla',
      },
      current: {
        condition: {
          text: 'Moderate or heavy rain with thunder',
          icon: '//cdn.weatherapi.com/weather/64x64/day/389.png',
          code: 1276,
        },
      },
      forecast: {
        forecastday: [
          {
            date: '2021-12-10',
            day: {
              maxtemp_c: 19,
              mintemp_c: 13.7,
              condition: {
                text: 'Heavy rain',
                icon: '//cdn.weatherapi.com/weather/64x64/day/308.png',
                code: 1195,
              },
            },
          },
        ],
      },
    };
    fetchSpy.mockResolvedValue(dummyResponse);
    const response = await locationApi.get('https://www.xbox');

    expect(fetchSpy).toHaveBeenCalled();
    expect(response).toEqual({
      location: dummyResponse.location,
      forecast: dummyResponse.forecast.forecastday,
      currentConditions: dummyResponse.current.condition,
    });
  });
});

import locationApi from '..';
import * as fetch from '../fetch';

describe('location-api.js', () => {
  it('exposes network requests as functions', () => {
    expect(locationApi).toHaveProperty('get');
  });

  it('passes on the network response', async () => {
    const fetchSpy = jest.spyOn(fetch, 'default');
    const dummyResponse = {
      text: 'it worked',
    };
    fetchSpy.mockResolvedValue(dummyResponse);
    const response = await locationApi.get('https://www.xbox');

    expect(fetchSpy).toHaveBeenCalled();
    expect(response).toEqual(dummyResponse);
  });
});

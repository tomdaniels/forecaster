import isEmpty from 'lodash/isEmpty';
import pickFrom from '../utils/pick-from';
import fetch from './fetch';

// this url should definitely come from the server with key/route hidden..
const baseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=89ef7791ec1448f9a4a53300210612';

export default {
  async get(searchLocation, days = 3) {
    const apiUrl = `${baseUrl}&q=${searchLocation}&days=${days}`;
    const response = await fetch(apiUrl);

    const fromResponse = pickFrom(response);
    const currentConditions = fromResponse('current.condition');
    const forecast = fromResponse('forecast.forecastday');
    const location = fromResponse('location', '');

    return isEmpty(response) ? undefined : {
      currentConditions,
      forecast,
      location,
    };
  },
};

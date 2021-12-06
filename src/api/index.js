import fetch from './fetch';

// this url should definitely come from the server with key/route hidden..
const baseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=89ef7791ec1448f9a4a53300210612';

export default {
  get(location, days = 3) {
    const apiUrl = `${baseUrl}&q=${location}&days=${days}`;
    return fetch(apiUrl);
  },
};

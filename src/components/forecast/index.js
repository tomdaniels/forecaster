import React from 'react';
import PropTypes from 'prop-types';
import Loader from './loader';

// eslint-disable-next-line no-unused-vars
const Forecast = ({ forecastData }) => (
  <section>
    {Object.keys(forecastData) <= 0 ? (
      <Loader />
    ) : (
      <div>
        {JSON.stringify(forecastData, null, 2)}
      </div>
    ) }
  </section>
);

Forecast.propTypes = {
  forecastData: PropTypes.shape({}),
};

Forecast.defaultProps = {
  forecastData: {},
};

export default Forecast;

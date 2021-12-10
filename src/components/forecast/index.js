import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';
import Loader from './loader';

import '../style/forecast.css';

const Forecast = ({ forecastData }) => {
  const { location, currentConditions, forecast } = forecastData;

  return (
    <section className="forecaster__forecast-wrapper">
      {Object.keys(forecastData) <= 0 ? (
        <Loader />
    ) : (
      <div>
        <h2>Current conditions in {location.name}:</h2>
        <div>
          {currentConditions.text}
          <img alt={`${location.name}-forcast-icon`} src={currentConditions.icon} />
        </div>
        {forecast?.length > 0 && <ForecastSummary forecast={forecast} />}
      </div>
    )}
    </section>
  );
};

Forecast.propTypes = {
  forecastData: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
    currentConditions: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
    forecast: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      day: PropTypes.shape({
        mintemp_c: PropTypes.number,
        maxtemp_c: PropTypes.number,
        condition: PropTypes.shape({
          text: PropTypes.string,
          icon: PropTypes.string,
        }),
      }),
    })),
  }),
};

Forecast.defaultProps = {
  forecastData: {},
};

export default Forecast;

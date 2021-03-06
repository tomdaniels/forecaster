import React from 'react';
import PropTypes from 'prop-types';

import '../style/forecast.css';

const ForecastSummary = ({ forecast }) => (
  <section className="forecaster__forecast-wrapper">
    <h3>Your three day forecast</h3>
    {forecast.map((item, idx) => (
        // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={idx}>
        <div className="forecaster__forecast-summary-header">
          <h4>{item.date}</h4>
          min: <strong>{item.day.mintemp_c}</strong>{' '}
          max: <strong>{item.day.maxtemp_c}</strong>
        </div>
        <div className="forecaster__forecast-summary">
          <img src={item.day.condition.icon} alt={item.day.condition.icon} />
          <p>{item.day.condition.text}</p>
        </div>
      </React.Fragment>
    ))}
  </section>
);

ForecastSummary.propTypes = {
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
  })).isRequired,
};

export default ForecastSummary;

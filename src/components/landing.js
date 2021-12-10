import React, { useState } from 'react';
import LocationSearch from './location-search';
import Forecast from './forecast';
import locationApi from '../api';

import './style/landing.css';

function Landing() {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState({});
  const [hasError, setHasError] = useState(false);
  const [showForecast, setShowForecast] = useState(false);

  const resetState = () => {
    setForecast({});
    setHasError(false);
    setShowForecast(false);
  };

  const handleChange = event => {
    resetState();
    setLocation(event.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    setShowForecast(true);

    const response = await locationApi.get(location);
    if (response === undefined) {
      setHasError(true);
    } else {
      setForecast({ ...response });
    }
  };

  return (
    <div className="forecaster__landing">
      <h1>Forecaster! Search your destination</h1>
      <LocationSearch location={location} handleChange={handleChange} onSubmit={onSubmit} />
      {hasError && <pre>Hm.. something went wrong fetching the request, try again?</pre>}
      {!hasError && showForecast && <Forecast forecastData={forecast} />}
    </div>
  );
}

export default Landing;

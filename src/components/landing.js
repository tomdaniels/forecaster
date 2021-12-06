import React, { useState } from 'react';
import LocationSearch from './location-search';
import Forecast from './forecast';
import locationApi from '../api';

import './style/landing.css';

function Landing() {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState({});
  const [showForecast, setShowForecast] = useState(false);

  const handleChange = event => {
    setLocation(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setShowForecast(true);

    locationApi.get(location).then(data => setForecast({ ...data }));
  };

  return (
    <div className="forecaster__landing">
      <h1>Forecaster! Search your destination</h1>
      <LocationSearch location={location} handleChange={handleChange} onSubmit={onSubmit} />
      {showForecast && <Forecast forecastData={forecast} />}
    </div>
  );
}

export default Landing;

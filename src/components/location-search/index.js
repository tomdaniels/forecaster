import React from 'react';
import PropTypes from 'prop-types';

import '../style/location-search.css';

const LocationSearch = ({ location, onSubmit, handleChange }) => (
  <form className="forecaster__location-search" onSubmit={onSubmit}>
    <input value={location} type="text" placeholder="...enter your city" onChange={handleChange} />
    <button onClick={onSubmit}>Search</button>
  </form>
);

LocationSearch.propTypes = {
  location: PropTypes.string,
  onSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

LocationSearch.defaultProps = {
  location: '',
  onSubmit: () => {},
  handleChange: () => {},
};

export default LocationSearch;

import React from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const Main = ({ fieldValue }) => {
  const images = fieldValue;
  return (
    <div className="container">
      {images.map(({ url }) => <a href={url} target="_new" className="link"><img alt="desc" src={url} className="thumb" /></a>)}
    </div>
  );
};

Main.propTypes = {
  fieldValue: PropTypes.bool.isRequired,
};

export default Main;

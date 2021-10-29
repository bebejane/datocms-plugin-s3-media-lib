import React from 'react';
import PropTypes from 'prop-types';
import './style.sass';

const Main = ({ fieldValue }) => {
  const images = fieldValue || [{ url: 'https://www.datocms-assets.com/55629/1632414400-4.jpg' }, { url: 'https://www.datocms-assets.com/55629/1632414374-1.jpg' }];
  return (
    <div className="container">
      {images ? images.map(({ url }) => (
        <a href={url} target="_new" className="link">
          <img alt="desc" src={url} className="thumb" />
        </a>
      ))
        : <div className="empty">No files added...</div>
      }
    </div>
  );
};

Main.propTypes = {
  fieldValue: PropTypes.bool.isRequired,
};

export default Main;

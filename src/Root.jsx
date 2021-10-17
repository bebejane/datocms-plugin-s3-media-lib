import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Main from './Main';

const Root = ({ plugin }) => {
  const images = [{ url: 'https://i.imgur.com/sKqwP0o.jpeg' }, { url: 'https://i.imgur.com/mwir12i.jpeg' }];
  console.log(images);
  const [state, setState] = useState({
    developmentMode: plugin.parameters.global.developmentMode,
    fieldValue: plugin.getFieldValue(plugin.fieldPath) || images,
  });

  useEffect(() => {
    const unsubscribe = plugin.addFieldChangeListener(plugin.fieldPath, () => {
      setState({
        developmentMode: plugin.parameters.global.developmentMode,
        fieldValue: plugin.getFieldValue(plugin.fieldPath),
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <Main plugin={plugin} {...state} />;
};

Root.propTypes = {
  plugin: PropTypes.object.isRequired,
};

export default Root;

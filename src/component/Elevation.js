import React from 'react';

const Elevation = ({ elevation, planName }) => (
  <div>
    <p>{planName + ' ' + elevation.caption}</p>
  </div>
);

export default Elevation;

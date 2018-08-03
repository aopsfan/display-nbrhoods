import React from 'react';
import Elevation from './Elevation';

const renderElevation = (elevation, plan, index) => {
  return <Elevation
            key={index}
            elevation={elevation}
            planName={plan.name}/>
}

const Plan = ({ plan }) => (
  <div>
    <p>{plan.name}</p>

    {plan.elevations.map((elevation, index) => {
      return renderElevation(elevation, plan, index);
    })}
  </div>
);

export default Plan;

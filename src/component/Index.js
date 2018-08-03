import React from 'react';
import Elevation from './Elevation';
import * as R from 'ramda';

class Index extends React.Component {
  renderElevation = (elevation, index) => {
    return <Elevation
              key={index}
              elevation={elevation}
              planName={elevation.planName}
              elevationThumbPath={this.props.elevationThumbPath}/>
  }

  elevations = () => {
    const plans = this.props.communities.reduce((plans, community) => {
      return plans.concat(community.plans);
    }, []);

    const elevations = plans.reduce((elevations, plan) => {
      const descriptiveElevations = plan.elevations.map(R.assoc('planName', plan.name));
      return elevations.concat(descriptiveElevations);
    }, []);

    return elevations;
  }

  render() {
    return (
      <div>
        {this.elevations().map(this.renderElevation)}
      </div>
    );
  }
}

export default Index;

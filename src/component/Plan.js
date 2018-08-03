import React from 'react';
import Elevation from './Elevation';

class Plan extends React.Component {
  renderElevation = (elevation, index) => {
    return <Elevation
              key={index}
              elevation={elevation}
              planName={this.props.plan.name}
              elevationThumbPath={this.props.elevationThumbPath}/>
  }

  render() {
    return (
      <div>
        <p>{this.props.plan.name}</p>
        {this.props.plan.elevations.map(this.renderElevation)}
      </div>
    );
  }
}

export default Plan;

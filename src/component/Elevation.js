import React from 'react';

class Elevation extends React.Component {
  thumbPath = () => {
    return this.props.elevationThumbPath(this.props.elevation.thumb);
  }

  name = () => {
    return this.props.plan.name + ' ' + this.props.elevation.caption;
  }

  render() {
    return (
      <div>
        <p>{this.name()}</p>
        <p>{this.props.elevation.bed} Beds</p>
        <p>{this.props.elevation.bath} Baths</p>
        <p>{this.props.elevation.size} sq ft</p>
        <p>${this.props.elevation.cost}</p>
        <img src={this.thumbPath()} alt={this.props.elevation.name} />
      </div>
    );
  }
}

export default Elevation;

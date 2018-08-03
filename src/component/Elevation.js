import React from 'react';

class Elevation extends React.Component {
  thumbPath = () => {
    return this.props.elevationThumbPath(this.props.elevation.thumb);
  }

  render() {
    return (
      <div>
        <p>{this.props.planName + ' ' + this.props.elevation.caption}</p>
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

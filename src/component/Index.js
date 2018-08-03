import React from 'react';
import Plan from './Plan';

class Index extends React.Component {
  renderPlan = (plan, index) => {
    return <Plan
              key={index}
              plan={plan}
              elevationThumbPath={this.props.elevationThumbPath}/>
  }

  plans = () => {
    const plans = this.props.communities.reduce((plans, community) => {
      return plans.concat(community.plans);
    }, []);

    return plans;
  }

  render() {
    return (
      <div>
        {this.plans().map(this.renderPlan)}
      </div>
    );
  }
}

export default Index;

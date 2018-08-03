import React from 'react';
import Plan from './Plan';

class PlanPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { communityIndex: 0, planIndex: 0 };
  }

  community = () => {
    return this.props.communities[this.state.communityIndex];
  }

  plan = () => {
    return this.community().plans[this.state.planIndex];
  }

  selectCommunity = event => {
    const value = parseInt(event.target.value, 10);
    this.setState(prevState => {
      return { communityIndex: value, planIndex: 0 };
    });
  }

  selectPlan = event => {
    const value = parseInt(event.target.value, 10);
    this.setState(prevState => {
      return { planIndex: value };
    });
  }

  render() {
    return (
      <div>
        <select value={this.state.communityIndex} onChange={this.selectCommunity}>
          {this.props.communities.map((community, index) => {
            return <option key={index} value={index}>{community.name}</option>
          })}
        </select>
        <select value={this.state.planIndex} onChange={this.selectPlan}>
          {this.community().plans.map((plan, index) => {
            return <option key={index} value={index}>{plan.name}</option>
          })}
        </select>
        <Plan plan={this.plan()} elevationThumbPath={this.props.elevationThumbPath} />
      </div>
    );
  }
}

export default PlanPicker;

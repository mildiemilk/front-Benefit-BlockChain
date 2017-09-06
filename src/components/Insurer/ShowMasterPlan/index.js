import React, { Component } from 'react';
import JoinBid from './JoinBid';

class ShowMasterPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinbid: true,
    };
  }

  render() {
    const { joinbid } = this.state;
    return (
      <div className="show-mp-box">
        asdfaaaa
        {joinbid ? <JoinBid /> : <div />}
      </div>
    );
  }
}

export default ShowMasterPlan;

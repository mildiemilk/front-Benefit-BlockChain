import React, { Component } from 'react';
import JoinBid from './JoinBid';

class ShowMasterPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinbid: true,
      modalCancelJoin: false,
    };
  }

  handleOnpenModal = name => this.setState({ [name]: true });
  // handleOnpenModal = nameModal => {
  //   console.log(nameModal);
  // }

  handleCloseModal = nameModal => this.setState({ [nameModal]: false });

  render() {
    const { joinbid } = this.state;
    return (
      <div className="show-mp-box">
        {
          joinbid
          ? <JoinBid
            modalCancelJoin={this.state.modalCancelJoin}
            handleOnpenModal={this.handleOnpenModal}
            handleCloseModal={this.handleCloseModal}
          />
          : <div />
        }
      </div>
    );
  }
}

export default ShowMasterPlan;

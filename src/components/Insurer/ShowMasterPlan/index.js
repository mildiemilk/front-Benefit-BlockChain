import React, { Component } from 'react';
import JoinBid from './JoinBid';
import Quotation from './Quotation';

class ShowMasterPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinbid: true,
      modalCancelJoin: false,
      quotation: false,
    };
  }

  handleOnpenModal = name => this.setState({ [name]: true });

  handleCloseModal = nameModal => this.setState({ [nameModal]: false });

  handleChangeStateQuotation = () =>
    this.setState({
      joinbid: false,
      modalCancelJoin: false,
      quotation: true,
    });

  render() {
    const { joinbid, quotation } = this.state;
    return (
      <div className="show-mp-box">
        {
          joinbid
          ? <JoinBid
            modalCancelJoin={this.state.modalCancelJoin}
            handleOnpenModal={this.handleOnpenModal}
            handleCloseModal={this.handleCloseModal}
            handleChangeStateQuotation={this.handleChangeStateQuotation}
          />
          : <div />
        }
        {
          quotation
          ? <Quotation />
          : <div />
        }
      </div>
    );
  }
}

export default ShowMasterPlan;
